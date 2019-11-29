import  React from  'react'

class Formulario extends React.Component{
    render() {
        return (
            <form>
                <section className="pt-3 pb-3">
                    <div className="container">
                        <div className="row">
                            <div className="col text-uppercase text-center">
                                <small>PONTE EN CONTACTO</small>
                                <h2>Comenta tus inquietudes</h2>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col col-md-10 offset-md-1 col-lg-8 offset-lg-2 pt-2">
                                <form>
                                    <div className="form-row">
                                        <div className="form-group col-12 col-md-6">
                                            <input type="text" className="form-control" placeholder="Nombre"/>
                                        </div>
                                        <div className="form-group col-12 col-md-6">
                                            <input type="text" className="form-control" placeholder="Apellido"/>
                                        </div>
                                    </div>
                                    <div className="form-row">
                                        <div className="form-group col">
                                            <textarea name="text" className="form-control form-control-lg"
                                                      placeholder="Sobre qué quieres comentar?"></textarea>

                                        </div>
                                    </div>
                                    <div className="form-row">
                                        <div className="col">
                                            <button type="button" className="btn btn-primary">Enviar</button>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </section>
            </form>
        );
    }
}
export default Formulario