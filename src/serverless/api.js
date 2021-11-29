import app from '../app';

export async function handler(event, context) {
  const response = await app(event, context);
  return response;
}
