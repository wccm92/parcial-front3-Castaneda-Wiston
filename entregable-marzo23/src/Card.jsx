//Este componente deberia recibir por props y mostrar en pantalla la informacion
//que envia el usuario

function Card(props) {

  const { name, marca } = props.props;

    return (
      <div>
        <h2>{`Hola ${name}`}</h2>
        <p>{`Tu marca favorita es ${marca}`}</p>
      </div>
    );
}
  
export default Card;