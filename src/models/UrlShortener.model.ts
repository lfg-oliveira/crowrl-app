import { ObjectId } from "mongodb";

interface IUrlShortener {
    _id?: ObjectId ,
    url?: string,
    shortenedUrl?: string
}

export default IUrlShortener;