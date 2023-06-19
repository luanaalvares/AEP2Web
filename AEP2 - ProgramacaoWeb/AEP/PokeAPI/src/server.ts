import app from "./app"

function main(){
    try{
        app.listen(3000, '0.0.0.0', async () => {
            console.log('Starting server...')
        })
    }catch(err){
        console.log('Error while starting the server! ', err)
    }
}

main()