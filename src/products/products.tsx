import Data from './data.json';

export default function Products() {
    return (
        <div>
            {
                Data.map(data => {
                    return(
                        <div className="box">
                            <div className="row1">
                                <h1>{data.name}</h1>
                                <h1>{data.price}</h1>
                                <h1>{data.category}</h1>
                                <h1>{data.brand}</h1>
                                <h1>{data.description}</h1>
                            </div>
                        </div>
                    )
                })
            }
        </div>
    );
}