import React from 'react';
import useTitle from '../../hooks/useTitle';

const AddService = () => {
    useTitle('AddServices');

    const newService = event =>{
        event.preventDefault();
        const form = event.target;
        const title = form.name.value;
        const price = form.price.value;
        const img = form.img.value;
        const description = form.description.value;
        console.log(title, price, img, description);
        const newService = {
            title, 
            price,
            img,
            description
        }

        fetch(`https://tourist-review-server.vercel.app/addservice`,{
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newService)
        })
        .then(res => res.json())
        .catch(err => console.error(err))


    }


    return (
        <div>
            <h2>Add Your Own Service</h2>
            <form onSubmit= {newService}>
                <div className="hero min-h-screen bg-base-200">
                    <div className="">
                        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <div className="card-body">
                            <div className="form-control">
                            <label className="label">
                                <span className="label-text">Service title</span>
                            </label>
                            <input type="text" name='name' placeholder="service name" className="input input-bordered" required/>
                            </div>

                            <div className="form-control">
                            <label className="label">
                                <span className="label-text">Price</span>
                            </label>
                            <input type="text" name='price' placeholder="price" className="input input-bordered" required/>
                            </div>

                            <div className="form-control">
                            <label className="label">
                                <span className="label-text">Image url</span>
                            </label>
                            <input type="text" name='img' placeholder="image url" className="input input-bordered" required/>

                            <label className="label">
                                <span className="label-text">Write description</span>
                            </label>
                            </div>
                            <textarea className="textarea textarea-primary" name='description' placeholder="Description" required></textarea>
                            
                            <div className="form-control mt-6">
                            <button className="btn btn-primary" type='submit' >Add Service</button>
                            </div>
                        </div>
                        </div>
                    </div>
                </div>
            </form>
        </div>
    );
};

export default AddService;