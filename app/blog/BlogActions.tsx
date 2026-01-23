"use client"

import { useRouter } from "next/navigation";
import { useState } from "react";
import toast from "react-hot-toast";
import { MdOutlineDeleteOutline } from "react-icons/md";

type BlogActionProps = {
    id: string;
}

const BlogActions = ({ id }: BlogActionProps) => {
    
    const [showModal , setShowModal] = useState(false);
    const router = useRouter();

    const handleDelete = async () => {
        try {
            const res = await fetch(`/api/blog/${id}`, {
                method: "DELETE",
            })
            if (!res.ok) throw new Error();

            toast.success("Blog deleted!");
            router.refresh();

        } catch (error) {
            toast.error("Delete Failed");
        }
    }
    return (
        <>
            <button onClick={() => { setShowModal(true) }} className="mr-2">
                <MdOutlineDeleteOutline className="text-gray-400" size={18} />
            </button>

            {showModal && (
                <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 rounded-2xl p-6 animate-in fade-in zoom-in">
                    <div className="bg-white w-full max-w-sm rounded-xl shadow-xl p-6 animate-in fade-in zoom-in ">

                        <h3 className="text-base font-semibold text-gray-800 mb-2">
                            Confirm Delete
                        </h3>

                        <p className="text-sm text-gray-600 mb-6">
                            Are you sure you want to delete this blog?
                        </p>
                        <div className="flex justify-end gap-3">
                            <button onClick={() => setShowModal(false)}
                                className="px-4 py-2 text-sm rounded-md border border-gray-300 text-gray-700 hover:bg-gray-100 transition"
                            >
                               Cancel
                            </button>

                            <button onClick={() => {
                                setShowModal(false) ;
                                handleDelete();
                            }}
                             className="px-4 py-2 text-sm rounded-md bg-red-500 text-white hover:bg-red-600 transition"
                            >
                               Delete
                            </button>
                        </div>

                    </div>
                </div>
            )}
        </>
    )
}

export default BlogActions;