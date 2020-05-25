import { handleCors, handleBodyRequestParsing, handleCompression, handleCookieParsing } from './common';
import { handleAPIDocs } from './apiDocs';
import { handleHTTPLogging } from './logging';

export default [
  handleCors,
  handleBodyRequestParsing,
  handleCookieParsing,
  handleCompression,
  handleHTTPLogging,
  handleAPIDocs
];
