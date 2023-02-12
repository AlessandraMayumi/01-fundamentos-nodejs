/** Importação de clientes via CSV
 * Exemplo:
 * 1Gb arquivo
 * 10mb/s velocidade da internet
 * 100s tempo de download
 */

// process.stdin
//     .pipe(process.stdout)

import { Readable, Writable } from 'node:stream';


class OneToHundredStream extends Readable {
    index = 1
    _read() {
        const i = this.index++;
        setTimeout(() => {
            if (i > 100) {
                this.push(null)
            } else {
                const buf = Buffer.from(String(i))
                this.push(buf)
            }
        }, 1000);
    }
}

class MultipyByTenStream extends Writable {
    _write(chunk, encoding, callback) {
        console.log(Number(chunk.toString() * 10));
        callback();
    }
}

new OneToHundredStream()
    // .pipe(process.stdout)
    .pipe(new MultipyByTenStream())