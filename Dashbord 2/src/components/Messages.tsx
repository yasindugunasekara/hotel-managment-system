import React, { useState, useEffect } from 'react';
import { User } from 'lucide-react';

// This function helps format dates for display
const formatTimeAgo = (dateString: string) => {
    if (!dateString) return '';
    const date = new Date(dateString);
    const now = new Date();
    const seconds = Math.floor((now.getTime() - date.getTime()) / 1000);
    
    let interval = seconds / 31536000;
    if (interval > 1) return Math.floor(interval) + " years ago";
    interval = seconds / 2592000;
    if (interval > 1) return Math.floor(interval) + " months ago";
    interval = seconds / 86400;
    if (interval > 1) return Math.floor(interval) + " days ago";
    interval = seconds / 3600;
    if (interval > 1) return Math.floor(interval) + " hours ago";
    interval = seconds / 60;
    if (interval > 1) return Math.floor(interval) + " minutes ago";
    return Math.floor(seconds) + " seconds ago";
};


type Message = {
    _id: string;
    fullName: string;
    email: string;
    subject: string;
    createdAt: string;
    isRead?: boolean;
    message?: string;
};

export default function Messages() {
    const [messages, setMessages] = useState<Message[]>([]);
    const [loading, setLoading] = useState(true);

    // Use the full backend URL during development to avoid proxy issues.
    // Replace 'http://localhost:5000' with your actual backend server address if it's different.
    const API_BASE_URL = "http://localhost:5000/api"; 

    useEffect(() => {
        const fetchMessages = async () => {
            try {
                const response = await fetch(`${API_BASE_URL}/messages`);
                if (!response.ok) {
                    // Log the response to see what the server is actually sending
                    const errorBody = await response.text();
                    console.error("Server responded with an error:", response.status, errorBody);
                    throw new Error("Network response was not ok");
                }
                const data = await response.json();
                // Ensure we get an array, even if the API response is nested
                const messageList = Array.isArray(data) ? data : data.data || [];
                setMessages(messageList);
            } catch (error) {
                console.error("Error fetching messages:", error);
                setMessages([]); // Fallback to an empty array on error
            } finally {
                setLoading(false);
            }
        };

        fetchMessages();
    }, []);

    const handleReply = (msg: { _id?: string; fullName: any; email: any; subject?: string; createdAt?: string; isRead?: boolean | undefined; message?: string }) => {
        // In a real app, this would open a reply modal or navigate to a new page
        alert(`Replying to ${msg.fullName} (${msg.email})\nMessage: ${msg.message}`);
    };
    
    // Display a loading message while data is being fetched
    if (loading) {
        return (
            <div className="p-6">
                <h1 className="text-2xl font-bold mb-6">Messages</h1>
                <div className="text-center text-gray-500 bg-white rounded-xl shadow-md p-8">
                    <p>Loading messages...</p>
                </div>
            </div>
        );
    }
    
    // Display a message if no messages are found
    if (messages.length === 0) {
        return (
             <div className="p-6">
                <h1 className="text-2xl font-bold mb-6">Messages</h1>
                <div className="text-center text-gray-500 bg-white rounded-xl shadow-md p-8">
                    <p>No messages found.</p>
                </div>
            </div>
        );
    }

    return (
        <div className="space-y-6 p-4 sm:p-6">
            <h1 className="text-2xl font-bold">Messages</h1>
            <div className="bg-white rounded-xl shadow-md">
                {messages.map((message) => (
                    <div key={message._id} className={`p-6 border-b last:border-b-0 hover:bg-gray-50 transition-colors cursor-pointer ${!message.isRead ? 'bg-blue-50' : ''}`}>
                        <div className="flex items-start justify-between">
                            <div className="flex items-start gap-4">
                                <div className="w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center">
                                    <User className="w-5 h-5 text-gray-600" />
                                </div>
                                <div>
                                    <div
                                      className="flex items-center gap-2"
                                      onClick={() => {
                                        setMessages(prev =>
                                          prev.map(m =>
                                            m._id === message._id ? { ...m, isRead: true } : m
                                          )
                                        );
                                      }}
                                      style={{ cursor: 'pointer' }}
                                    >
                                      <p className="font-semibold">{message.fullName}</p>
                                      {!message.isRead && <span className="w-3 h-3 bg-blue-600 rounded-full"></span>}
                                    </div>
                                    <p className="text-sm text-gray-500" style={{ fontFamily: 'Arial, sans-serif' }}>
                                      "{message.email}"
                                    </p>
                                    <p className="text-sm text-gray-500">{message.subject}</p>
                                    <p className="text-gray-700 mt-1">{message.message}</p>
                                    <p className="text-sm text-gray-500 mt-1">{formatTimeAgo(message.createdAt)}</p>
                                </div>
                            </div>
                            <button
                              onClick={() => window.location.href = `mailto:${message.email}`}
                              className="text-blue-600 hover:text-blue-700 text-sm font-medium"
                            >
                              Reply
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

