const AnalogDisplay = (props) => {
    // Certifique-se de que props.time é um objeto Date
    let date = new Date(props.time);

    // Estilo do mostrador do relógio
    let dialStyle = {
        position: 'relative',
        top: 0,
        left: 0,
        width: 200,
        height: 200,
        borderRadius: '50%',
        borderStyle: 'solid',
        borderColor: 'black',
    };

    // Estilo do ponteiro dos segundos
    let secondHandStyle = {
        position: 'relative',
        top: 100,
        left: 100,
        border: '1px solid red',
        width: '40%',
        height: 1,
        transform: 'rotate(' + ((date.getSeconds() / 60) * 360 - 90).toString() + 'deg)',
        transformOrigin: '0% 0%',
        backgroundColor: 'red'
    };

    // Estilo do ponteiro dos minutos
    let minuteHandStyle = {
        position: 'relative',
        top: 100,
        left: 100,
        border: '1px solid grey',
        width: '40%',
        height: 3,
        transform: 'rotate(' + ((date.getMinutes() / 60) * 360 - 90).toString() + 'deg)',
        transformOrigin: '0% 0%',
        backgroundColor: 'grey'
    };

    // Estilo do ponteiro das horas
    let hourHandStyle = {
        position: 'relative',
        top: 92,
        left: 106,
        border: '1px solid grey',
        width: '20%',
        height: 7,
        transform: 'rotate(' + ((date.getHours() / 12) * 360 - 90).toString() + 'deg)',
        transformOrigin: '0% 0%',
        backgroundColor: 'grey'
    };

    // Renderiza o mostrador e os ponteiros
    return (
            <div>
      <div style={dialStyle}>
        <div style={secondHandStyle}></div>
        <div style={minuteHandStyle}></div>
        <div style={hourHandStyle}></div>
      </div>
    </div>
    
    );
};