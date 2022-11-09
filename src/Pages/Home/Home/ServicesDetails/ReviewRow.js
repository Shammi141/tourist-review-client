import React from 'react';

const ReviewRow = ({review, handelDelete}) => {
    const {reviewerName, email, image, message, _id} = review;
    
    return (
        <tr>
            <th>
                <label>
                    <button onClick={() => handelDelete(_id)} className='btn'>X</button>
                </label>
                </th>
                <td>
                <div className="flex items-center space-x-3">
                    <div className="avatar">
                    <div className="mask mask-squircle w-12 h-12">
                        <img src={image} alt="Avatar Tailwind CSS Component" />
                    </div>
                    </div>
                    <div>
                    <div className="font-bold">{reviewerName}</div>
                    <div className="text-sm opacity-50">{email}</div>
                    </div>
                </div>
                </td>
                <td>
                    {message}
                <br/>
                </td>
                <th>
                <button className="btn btn-ghost btn-xs">details</button>
            </th>
        </tr>
    );
};

export default ReviewRow;