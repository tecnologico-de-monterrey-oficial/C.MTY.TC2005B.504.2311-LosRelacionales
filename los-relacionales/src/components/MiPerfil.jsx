function MiPerfil(){

    return(
        <div>
            <div>
            <h1>Mi Perfil</h1>
            <img 
             alt=""
             src="/fotoperfil.png"
             height="30"
             className="imagen_perfil"
           />
            <h2>Mis Dimensiones: </h2>
            <Button variant="secondary" size="lg">
          Dimensión funcional
        </Button>
        <Button variant="secondary" size="lg">
          Dimensión de riesgo social
        </Button>
        <Button variant="secondary" size="lg">
        Dimensión cognitiva
        </Button>
        <Button variant="secondary" size="lg">
        Dimensión de desempeño físico
        </Button>
        <Button variant="secondary" size="lg">
        Dimensión aafectiva
        </Button>
        

            </div>
        <h1>Dimension Funcional</h1>
        
        </div>
    );
}
export default MiPerfil;