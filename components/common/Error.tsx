export default function ErrorComponent({ error }: { error: string }) {
  return (
    <div className="h-screen flex items-center justify-center bg-gray-50">
      <div className="text-center max-w-md px-4">
        <p className="text-red-600 text-2xl font-bold mb-2">Error!</p>
        <p className="text-red-500 mb-4">{error}</p>
        <div className="mt-4 p-4 bg-gray-100 rounded">
          <p className="font-semibold text-gray-800 mb-2">Troubleshooting:</p>
          <ul className="list-disc text-left ml-6 text-sm text-gray-600">
            <li>Is the backend running on port 3000?</li>
            <li>Check the browser console for details</li>
            <li>Verify API_TOKEN is set correctly</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
