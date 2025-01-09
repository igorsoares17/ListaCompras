const Value = ({value}) => {

    return (
  
      <>
          {value && <p className="text-datas">R${value}</p>}
      </>
    )
  }
  
  export default Value;