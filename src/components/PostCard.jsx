import React from "react";
import service from "../appwrite/config";
import { Link } from "react-router-dom";

function PostCard({ $id, title, featuredImage }) {
  return (
    <Link to={`/posts/${$id}`}>
      <div className="border border-gray-200 rounded-lg overflow-hidden hover:shadow-lg duration-200">
        {featuredImage && (
          <img
            src={service.getFilePreviewURL(featuredImage)}
            alt={title}
            className="w-full h-48 object-cover"
          />
        )}
        <div className="p-4">
          <h3 className="text-lg font-semibold">{title}</h3>
        </div>
      </div>
    </Link>
  );
}

export default PostCard;
