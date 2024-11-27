import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

// interface Stream {
//   _id: string
//   name: string
//   trialDays: number
//   createdAt: string
// }

export default function StreamList() {
  const [streams, setStreams] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    fetchStreams();
  }, []);

  const fetchStreams = async () => {
    try {
      const response = await fetch(
        `${import.meta.env.VITE_PUBLIC_API}/api/streams/get-all`
      );
      if (!response.ok) throw new Error('Malumotlarni yuklashda xatolik');
      const data = await response.json();

      setStreams(data);
    } catch (err) {
      setError('Malumotlarni yuklashda xatolik yuz berdi');
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  const formatDate = dateString => {
    const date = new Date(dateString);
    return `${date.getDate()}.${
      date.getMonth() + 1
    }.${date.getFullYear()} в ${date.getHours()}:${String(
      date.getMinutes()
    ).padStart(2, '0')}`;
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-[200px]">
        <div className="text-gray-500">Загрузка ...</div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex justify-center items-center min-h-[200px]">
        <div className="text-red-500">{error}</div>
      </div>
    );
  }

  return (
    <div className="container mx-auto ">
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white">
          <thead>
            <tr className="border-t">
              <th className="text-left py-1 px-6 text-black font-medium">
                Промокод
              </th>
              <th className="text-left py-1 px-6 text-black font-medium">
                Триал
              </th>
              <th className="text-left py-1 px-6 text-black font-medium">
                Дата
              </th>
              <th className="py-1 px-6"></th>
            </tr>
          </thead>
          <tbody>
            {streams.map(stream => (
              <tr key={stream._id} className=" hover:bg-gray-50">
                <td className="py-1 px-6 text-gray-800">{stream.name}</td>
                <td className="py-1 px-6 text-gray-800">
                  {stream.trialDays} дн.
                </td>
                <td className="py-1 px-6 text-gray-500">
                  {formatDate(stream.createdAt)}
                </td>
                <td className="py-1 px-6">
                  <button
                    className="px-4 text-xs shadow-sm text-end py-2 bg-gray-100 text-gray-700 rounded hover:bg-gray-200 transition-colors"
                    onClick={() =>
                      navigate(`/dashboard/streams/edit/${stream._id}`)
                    }
                  >
                    Настройки
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        {streams.length === 0 && (
          <div className="text-center py-8 text-gray-500">
            Hech qanday stream topilmadi
          </div>
        )}
      </div>
    </div>
  );
}
