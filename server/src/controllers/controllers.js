



const controllers = {
    getters:{
        async getToken(req,res) {



            var  powerbi  = requerir ( ' powerbi-api ' ) ; 
var  msrest  = requerir ( ' ms-rest ' ) ; 
 
var  credenciales  = nuevo msrest . TokenCredentials ( ' {AccessKey} ' , " AppKey " ) ;   
 cliente  var = nuevo powerbi . PowerBIClient ( credenciales ) ;  
 
//  Ejemplo de llamada API
cliente . espacios de trabajo . getWorkspacesByCollectionName ( ' {WorkspaceCollection} ' , función ( err , resultado ) {   
    //  Tu código aquí
} ) ;
            console.log();
        }
    }
}