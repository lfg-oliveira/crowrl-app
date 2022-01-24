import { NextFunction, Request, Response } from "express";
import { addDoc, collection, getDocs, query, where } from "firebase/firestore";
import { nanoid } from "nanoid";
import db from "../database/DatabaseConnection";
import IUrlShortener from "../models/UrlShortener.model";

export const getQuerySnapshotEquals = async (extraParam: {
  field: string;
  value: string;
}) => {
  const collec = collection(db, "urls");
  const q = query(collec, where(extraParam.field, "==", extraParam.value));

  return await getDocs(q);
};

export const assertHttp = (url: string): string =>  {
  if (url.substring(0, 4) != "http") { 
    url = "http://" + url;
  }

  return url;
}

export const redirect = async (
  req: Request<IUrlShortener>,
  res: Response,
  next: NextFunction
) => {
  try {
    if (typeof req.params._id === undefined) {
      throw new TypeError(
        "_id is of type undefined when it should be a string"
      );
    }
    const querySnapshot = await getQuerySnapshotEquals({
      field: "_id",
      value: req.params._id!,
    });
    if (querySnapshot.empty) {
      res.status(404).json({ error: "Unable to locate URL." });
    }
    querySnapshot.forEach((doc) => {
      const data = doc.data();
      res.status(204).redirect(data.url);
    }
    );
  }
  catch (err: any) {
    console.error(err);
  }
};


export const shortenUrl = async (
  req: Request<IUrlShortener>,
  res: Response,
  next: NextFunction
) => {
  try {
    const id = nanoid();
    const data: IUrlShortener = {
      _id: id,
      shortenedUrl: `${req.headers.host}/${id}`,
      url: assertHttp(req.body.url),
    };
    const querySnapshot = await getQuerySnapshotEquals({
      field: "url",
      value: data.url,
    });
    if (!querySnapshot.empty) {
      querySnapshot.forEach((doc) => {
        res.status(200).json({ shortenUrl: doc.data().shortenedUrl, _id: doc.data()._id });
      });
    }
    else {
    await addDoc(collection(db, "urls"), data);
    res.status(201).json({ data });
    }
  }
  catch (err: any) {
    console.error(err);
  }
};
