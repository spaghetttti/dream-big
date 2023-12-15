export async function GET(request) {
  const data = [{'test': 'testing api in production'}];
  return new Response(JSON.stringify(data));
}
