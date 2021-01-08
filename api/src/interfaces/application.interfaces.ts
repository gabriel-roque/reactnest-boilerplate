export interface IApplication {
  readonly environment?: 'develop' | 'homolog' | 'production';
  readonly port: number;
  readonly version: string;
  readonly uriPrefix: string;
  readonly origin: string;
}
