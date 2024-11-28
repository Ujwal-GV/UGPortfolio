import React, { useEffect, useState } from 'react';
import axios from 'axios';

export default function AllMessages() {
    const [messages, setMessages] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [code, setCode] = useState('');
    const [isCodeValid, setIsCodeValid] = useState(false);

    const server_url = import.meta.env.VITE_BACKEND_URL;
    const apiClient = axios.create({
        baseURL: server_url
    });
    const axiosInstance = apiClient;

    const secretCode = import.meta.env.VITE_SECRET_CODE;

    const handleCodeChange = (e) => {
        setCode(e.target.value);
    };

    const handleCodeSubmit = (e) => {
        e.preventDefault();
        setError(null);
        if (code === secretCode) {
            setIsCodeValid(true);
        } else {
            setError('Invalid secret code');
        }
    };

    useEffect(() => {
        if (isCodeValid) {
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
        }
    }, [isCodeValid]);

    if (!isCodeValid) {
        return (
            <div className="flex justify-center items-center min-h-screen bg-gray-900">
                <form onSubmit={handleCodeSubmit} className="p-6 bg-gray-800 rounded-lg shadow-lg w-3/4 lg:w-96 md:w-96">
                    <h2 className="text-lg lg:text-2xl md:text-2xl font-semibold text-center mb-4 text-white">Enter Secret Code</h2>
                    <input
                        type="text"
                        value={code}
                        onChange={handleCodeChange}
                        className="border border-gray-600 p-2 mb-4 w-full rounded bg-gray-700 text-white"
                        placeholder="Enter secret code"
                    />
                    {error && <div className="text-red-500 text-center">{error}</div>}
                    <button type="submit" className="bg-blue-500 text-white p-2 rounded w-full hover:bg-blue-600 transition-all">Submit</button>
                </form>
            </div>
        );
    }

    if (loading) {
        return (
            <div className="flex justify-center items-center min-h-screen bg-gray-900">
                <div className="text-sm lg:text-lg md:text-lg text-gray-400">Loading messages....</div>
            </div>
        );
    }

    if (error) {
        return (
            <div className="flex justify-center items-center min-h-screen bg-gray-900">
                <div className="text-xl text-red-500">{error}</div>
            </div>
        );
    }

    return (
        <div className="max-w-4xl min-h-screen mx-auto p-6 rounded-lg shadow-lg bg-gray-800 mt-8">
            <h2 className="fontHead text-2xl lg:text-3xl md:text-3xl font-semibold text-center mb-4 text-white">All Messages</h2>
            <hr className='text-white my-5' />
            {messages.length === 0 ? (
                <p className="text-center text-xl text-gray-400">No messages found.</p>
            ) : (
                <ul className="space-y-4">
                    {messages.map((message) => (
                        <li key={message._id} className="p-4 bg-gray-300 rounded-lg shadow-md hover:shadow-xl transition-all">
                            <div className="font-bold text-sm lg:text-lg md:text-lg text-black">{message.name}</div>
                            <a href={`mailto:${message.email}`}>
                                <div className="text-sm lg:text-lg md:text-lg text-gray-800">{message.email}</div>
                            </a>
                            <p className="text-gray-800 text-sm lg:text-md md:text-lg mt-2">{message.message}</p>
                            <div className="text-sm lg:text-md md:text-md text-gray-900 mt-2">
                                {new Date(message.createdAt).toLocaleString()}
                            </div>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
}
