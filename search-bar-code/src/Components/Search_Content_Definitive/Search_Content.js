import React, {useState} from 'react';
import data from "./data"
import ProdData from "./Data.json";

const Search_Content = () => {
    const [filter, setfilter] = useState('');

    const searchText = (event) => {
        setfilter(event.target.value);
    }
    let dataSearch = data.cardData.filter(item =>{
        return Object.keys(item).some(key =>
        item[key].toString().toLowerCase().includes(filter.toString().toLowerCase()))
    })
    return (
        <section className="py-4 container">
            <div className="row justify-content-center">

                <div className="col-12 mb-5">
                    <div className="mb-3 col-4 mx-auto text-center">
                        <label className="form-lable h4">Buscar</label>
                        <input
                            type="text"
                            className="from-control"
                            placeholder="Busca el producto"
                            value={filter}
                            onChange={searchText.bind(this)}
                        />
                    </div>

                </div>

                {dataSearch.map((item, index)=>{
                    return (
                        <div className="col-11 col-md-6 col-lg-3 mx-0 mb-4">
                            <div className="card p-0 overflow-hidden h-100 shadow">
                                <img src={item.img} className="card-img-top"/>
                                <div className="card-body">
                                    <h5 className="card-title">{item.title}</h5>
                                    <p className="card-text small">Pequenia: {item.price_K_Small}</p>
                                    <p className="card-text medium">Mediana: {item.price_K_Medium}</p>
                                    <p className="card-text large">Grande: {item.price_K_Large}</p>
                                </div>
                            </div>
                        </div>
                    )
                })}
            </div>
        </section>
    )
}

export default Search_Content;