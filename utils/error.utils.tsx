export function getErrorMessage(error: any) {
    if(error instanceof Error){
        return error.message;
    }
    return "Message d'erreur manuel";
}