import React from 'react';

const ReviewRow = ({review, handelDelete}) => {
    const {reviewerName, email, image, message, _id} = review;
    
    return (
        <div>
            
            <tr>
            <th>
                <label>
                    <button onClick={() => handelDelete(_id)} className='btn'>X</button>
                </label>
                </th>
                <td >

                
                <div className="flex items-center space-x-3">
                    <div className="avatar">
                    <div className="mask mask-squircle w-12 h-12">
                        <img src={image} alt="Avatar Tailwind CSS Component" />

                            {
                            image ?
                            <>
                                <div className="avatar">
                                    <div className="w-2 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                                        <img src={image} alt="user img"/>
                                    </div>
                                </div>
                            </>
                            :
                            <>
                            <div className="avatar">
                                <div className="w-2 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                                    <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAHoAAAB6CAMAAABHh7fWAAAAY1BMVEX///8AAAD29vZISEienp60tLTr6+twcHAYGBg2Njbd3d29vb3AwMCAgIB1dXXm5ubPz8+tra2KiookJCQRERGUlJRra2umpqZjY2PJyck7OztTU1MJCQldXV1YWFhCQkIvLy8gjbwoAAAErElEQVRoge1b24KiMAxtQRFBEEG8jeL8/1fuIuMAbdqcUlz3wfM60x6Tprk1CPHBBx/8Pwi2xWa3KLM8z8rFblNsg3/Cmiyze7WXI+yre7ZMXsofpflFGnHJ0+g1vMF5FZt5O8Sr8/yyR/Wa4+2wrucVPckx3g55Mh/xwYW4xWEe8q2TxL+Sb/2Zj6xt0YiPviKfphG3OHkJnk4U+UfwdDpz5kPcIptIHIW+zFKGky55cvVnlvI64Zqd5yBucXZl3szFLOXmbcyO3LNpu4ODzpN5maWEbS3yciQUYvSOzXCfVYQYs7cPowD5tfQVzFIC/nw7+0F3iPk45hEl7ThxzMdXMUvJ5A4O6q6aPMvypoIXMCpH87Dm+Cw2guTYgItyGzPmxq6Z4p2SDAuwNqcGZb0NsUMCSX7wFLqm19bIWrPYyEkbIyASZ42nHQGLC7POCmC5KYwAOrNGXiDKG04r4GvJhY1ZiAW7wZqugfkffbczC3Fnt6DVtmLXWQ66A3/cK2oZn5vcOGYhbtweZL7Cx2lWaERsKm6z+r7wzEJY2jwdCI0H7KISoS5ZAXQb550olMnzPk13pktuyR5KppM9t89SW8PmoWsol45Yv6Tnpqw3+EKYhfji9tH8UsAmOnNRV6qdbdkzmot6r6ZovC8Ioe5nwFdNqmfiL8U3Zmbf7EbqJd2xK7BKFcixdsoSPtQSF5IA6x70oM86QEO8U8FHXs0hA5VtBRx2BBQjqk9BklH1kAgAJqOlpQj1mqdGngpUaqiVwBoaYGS6wgEz+wvGqwTQJqqZAZdLss6UdaIPqJcLsQ/JdGPA/o9qrWhn0lA+tIAKPqk7UqRgesAoN9zzUsMHHzSfaMi+xBZtLehBk08VehD9GIfuj5YqAOVSj3gx8qnRwqXXphduju3Je31OoiCIknPt8qMlZSyQIxrhGldV7P5AorvE2XvgJugZB1/4zAOi8IFiV3Wo64w823tW1wfkllCdHL7IrX6OKdFiTfmjxSVPThW5XGlfDe0jzX9Jqny4G0dOP0XY06pSPaOo2CyXm0LdKrCHXzrBs7VxKqCj8ERhE5xu41iaVyenV9HI3M43NK/MUc/5LdjoGk0x19SoZBp1FExJj1F79NWGqg4VtF82N+NJZwpk3xTIjMtSthGt+Ana7kDo3NKKJ8S2vlfYoR+ftVZV/x18i6ShVvl2MZTHpthroCdRNmPe98ZJ1iTj7jE2c3Y8Z+iJ2LfAeTcbqNxP3S0GKgeeUwdxG+sP2jDoHUJDQb0D/vKc1gv6+g8MA/2luHlxB/2bAHpJoz7Dxfp0BuZehCt8dAOnhvRuaAw7Og72OkxYHOd4nhhWzU5jSMOF9QSlB/X0Hz/kpl6N7Ri9KTurbajz2DFyjipP56EvxflfHDY4D0uoaR5xPODXgOlwMWovTBvwE2pi+QX4wnTcv5o61ii0Yc6qtqovqcfJv88wpz7Ceg1LrdR5ICrKUCnz/UZYBTW4W93KtG1mdH9vmxppedOKHe/BXWEcV/4Om9NfNCH92DHHuLJ445D2g/xdo+kt3jaQ3+JtnyE8EKUr28cXq1d9fNHhXZ+c/PK/5UObDz74AMQf/qQ7W/BCyqEAAAAASUVORK5CYII=" alt="default image" />
                                </div>
                            </div>
                            </>
                        }
                        
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
        </div>
    );
};

export default ReviewRow;