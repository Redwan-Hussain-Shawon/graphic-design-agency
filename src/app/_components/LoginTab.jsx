import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Mail } from "lucide-react";
import { signInWithPopup,GoogleAuthProvider } from "firebase/auth";
import { auth } from '../firebase';
import { useContext, useEffect, useState } from "react";
import { LoginContext } from "../_context/LoginContext";

 export function LoginTab() {
  const {loginActive, setLoginActive} = useContext(LoginContext);
    const googleSignIn = async()=>{
        const provider = new GoogleAuthProvider()
        try{
          const result = await signInWithPopup(auth,provider);
          const user = result.user;
          const userData ={
            email:user.email,
            displayName: user.displayName,
            uid:user.uid
          };
    
          const response = await fetch('/api/generateToken', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({ userData }), 
          });
    
          const data = await response.json();
          if(response.ok){
             console.log(data)
             localStorage.setItem('user',JSON.stringify(data.token))
             setLoginActive(false)
          }
        }catch(error){
          console.error(error)
        }
      }
  return (
    <Dialog open={loginActive} onOpenChange={setLoginActive}>
<DialogContent>
<DialogHeader>
        <DialogTitle>Login or Register </DialogTitle>
          <DialogDescription>
            <Button className="w-full mt-4" onClick={googleSignIn}>
              <Mail className="mr-2 h-4 w-4" /> Login with Gmail
            </Button>
            <Button className="w-full mt-2" onClick={googleSignIn}>
              <Mail className="mr-2 h-4 w-4"/> Register With Gmail
            </Button>
          </DialogDescription>
          </DialogHeader>
</DialogContent>
</Dialog>
  );
}
