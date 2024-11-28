import React, { useEffect, useState } from 'react'
import axios from 'axios';

export default function AllMessages() {
    const [messages, setMessages] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const server_url = import.meta.env.VITE_BACKEND_URL;
    const apiClient = axios.create({
        baseURL: server_url
    });
    const axiosInstance = apiClient;

    useEffect(() => {
        const fetchMessages = async () => {
            try {
                const response = await axiosInstance.get('/messages');
                console.log(response.data.messages);
                setMessages(response.data.messages);
            } catch (error) {
                setError(error.response ? error.response.data.error : 'Failed to fetch messages');
            } finally {
                setLoading(false);
            }
        };
        fetchMessages();
    }, []);

    if (loading) {
        return (
            <div className="flex justify-center items-center min-h-screen bg-gray-200">
                <div className="text-sm lg:text-lg md:text-lg text-gray-700">Loading messages....</div>
            </div>
        );
    }

    if (error) {
        return (
            <div className="flex justify-center items-center min-h-screen bg-gray-200">
                <div className="text-xl text-red-500">{error}</div>
            </div>
        );
    }

    return (
        <div className="max-w-4xl min-h-screen mx-auto p-6 rounded-lg shadow-lg bg-gray-200 mt-8">
            <h2 className="fontHead text-2xl lg:text-3xl md:text-3xl font-semibold text-center mb-4 p-2 rounded-full">All Messages</h2>
            <hr className='text-black font-bold bg-black my-5 text-xl' />
            {messages.length === 0 ? (
                <p className="text-center text-xl text-gray-600">No messages found.</p>
            ) : (
                <ul className="space-y-4">
                    {messages.map((message) => (
                        <li key={message._id} className="p-4 bg-gray-50 rounded-lg shadow-md hover:shadow-xl transition-all">
                            <div className="font-bold text-sm lg:text-lg md:text-lg text-gray-700">{message.name}</div>
                            <a href={`mailto:{message.email}`}><div className="text-sm lg:text-lg md:text-lg text-gray-500">{message.email}</div></a>
                            <p className="text-gray-700 text-sm lg:text-md md:text-lg mt-2">{message.message}</p>
                            <div className="text-sm lg:text-md md:text-md text-gray-400 mt-2">
                                {new Date(message.createdAt).toLocaleString()}
                            </div>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
}
