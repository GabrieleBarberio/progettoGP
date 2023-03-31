function generatePassword() {
    let char = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()_+~`|}{[]\:;?><,./-=";
    let password = "";
    let j = 0;
    while (j<16) {
      j++;
      let randomPassword = Math.floor(Math.random() * char.length);
      password += char.charAt(randomPassword);
    }
    return password;
  }

 let passwordcasuale = generatePassword();
 console.log("Ecco la tua password generata casualmente: "  + passwordcasuale)