export default function StatusBadge({ status }) {
    const colorMap = {
      pending: 'bg-yellow-400',
      accepted: 'bg-green-500',
      declined: 'bg-red-500',
    };
  
    return (
      <span className={`text-white text-xs px-2 py-1 rounded ${colorMap[status] || 'bg-gray-400'}`}>
        {status}
      </span>
    );
  }
  