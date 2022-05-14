export class AppSettings {
  static readonly MONGODB_URI: string = process.env.MONGODB_URI!;
  static readonly MONGODB_USER: string = process.env.MONGODB_USER!;
  static readonly MONGODB_PASSWORD: string = process.env.MONGODB_PASSWORD!;
  static readonly MONGODB_DATABASE: string = process.env.MONGODB_DATABASE!;
  static readonly MONGODB_CONNECTION_STRING: string = `${AppSettings.MONGODB_URI.split('://')[0]}://${AppSettings.MONGODB_USER}:${AppSettings.MONGODB_PASSWORD}@${AppSettings.MONGODB_URI.split('://')[1]}/${AppSettings.MONGODB_DATABASE}?retryWrites=true&w=majority`;
};
