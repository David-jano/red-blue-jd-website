'use client';
import { useState } from 'react';
import Image from 'next/image';

const Comments = () => {
  const [comments, setComments] = useState([
    {
      id: 1,
      name: 'David Jano',
      avatar: '/avatar.png',
      date: 'September 18, 2025',
      text: 'Iyi nkuru irashimishije cyane, murakoze kutugezaho aya makuru!',
    },
    {
      id: 2,
      name: 'NSENGIMANA Lambert',
      avatar: '/avatar.png',
      date: 'September 17, 2025',
      text: 'Ndabikunze cyane. Keep up the good work!',
    },
  ]);

  const [newComment, setNewComment] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newComment.trim()) return;

    setComments([
      ...comments,
      {
        id: comments.length + 1,
        name: 'Guest',
        avatar: '/avatar.png',
        date: new Date().toLocaleDateString(),
        text: newComment.trim(),
      },
    ]);

    setNewComment('');
  };

  return (
    <div className="bg-white rounded-lg shadow-lg p-6 md:p-10 max-w-3xl mx-auto my-12">
      <h3 className="text-2xl font-bold mb-6 text-gray-800">Ibitekerezo</h3>

      {/* List of comments */}
      <div className="space-y-6 mb-10">
        {comments.map((comment) => (
          <div key={comment.id} className="flex gap-4">
            <div className="w-12 h-12 relative">
              <Image
                src={comment.avatar}
                alt={comment.name}
                fill
                className="rounded-full object-cover"
              />
            </div>
            <div>
              <div className="flex items-center justify-between">
                <p className="font-semibold text-gray-800">{comment.name}</p>
                <span className="text-sm text-gray-400">{comment.date}</span>
              </div>
              <p className="text-gray-700 mt-1">{comment.text}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Comment input */}
      <form onSubmit={handleSubmit} className="mt-4">
        <textarea
          className="w-full border border-gray-300 rounded-lg p-4 resize-none focus:outline-none focus:ring-2 focus:ring-sky-500"
          rows={4}
          placeholder="Andika igitekerezo cyawe hano..."
          value={newComment}
          onChange={(e) => setNewComment(e.target.value)}
        ></textarea>
        <button
          type="submit"
          className="mt-4 px-6 py-2 bg-sky-600 text-white rounded-lg hover:bg-sky-700 transition duration-300"
        >
          Ohereza
        </button>
      </form>
    </div>
  );
};

export default Comments;
