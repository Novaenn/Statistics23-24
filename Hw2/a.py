from importlib import import_module
def decrypt(enc_passwd):
    aes = import_module('Crypto.Cipher.AES')
    initialization_vector = b' ' * 16
    enc_passwd = enc_passwd[3:]
    #Crea un oggetto cipher AES utilizzando la chiave generata dalla funzione sopra con mode AES MODE_CBC
    cipher = aes.new(createKey(), aes.MODE_CBC, IV=initialization_vector)
    # Decifra la password cifrata utilizzando l'oggetto cipher creato sopra
    decrypted = cipher.decrypt(enc_passwd)
    return decrypted.strip().decode('utf8')


def createKey():
    return 0
