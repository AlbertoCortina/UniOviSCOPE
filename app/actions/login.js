
function enCurso() {
   return{
        type:'EN_CURSO'
   }   
};

function acabo() {
    return{
         type:'LOGEADO'
    }   
 };

export function loginAction() {
    return (dispatch) => {
        dispatch(enCurso());

        fetch('http://192.168.1.60:8080/uniovi-scope/common/logIn', {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                userName: 'admin',
                password: 'admin',
            }),
            }).then((r) => {
                console.log('funciona'+r.headers.get('Authorization'));
                setTimeout(() =>{
                    dispatch(acabo());
                },2000);                
            }).catch((e) => {
                console.error('no funciona'+e);
            });

            
    }
}