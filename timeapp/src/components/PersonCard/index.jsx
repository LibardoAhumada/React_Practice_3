const PersonCard = (props) => {
    const { name, dateOfBirth, image, age, daysUntil } = props

    return (
        <>
        <div className="card mb-3 m-3" style={{maxWidth: '540px'}}>

            <div className="row g-0">
                <div className="col-md-4">
                    <img src={image} className="img-fluid rounded-start h-100" alt="..."/>
                </div>
            
                <div className="col-md-8">        
                  <div className="card-body">
                    <h5 className="card-title">{name}</h5>
                    <p className="card-text">Fecha de Nacimiento:<b>{dateOfBirth}</b></p>
                    <p className="card-text">Edad:<b>{age}</b></p>
                    <p className="card-text">Dias para el Cumpleaños<b>{ daysUntil }</b></p>
                  </div>    
                </div>
            </div>
              
        </div>
        </>    
    );
};

export default PersonCard