import db from "./redis";

class Client {
  client;
  hostname = "https://cr.ow/";
  constructor() {
    this.client = db;
  }

  connect = async () => {
    return this.client.connect();
  };

  generateUri = async (): Promise<string> => {
    const str = Math.random().toString(16).substring(2, 11);

    return str;
  };

  shortenURL = async (url: string, timeout: number): Promise<string> => {
    const uri = await this.generateUri();
    await this.client.set(uri, url, {
        EX: timeout
    });
    return this.hostname + uri;
  };
    
  redirectFrom = async (shortUri: string): Promise<string | null> => {
    const redirectUrl = await this.client.get(shortUri);

    return redirectUrl;
  }
}

export default new Client();
