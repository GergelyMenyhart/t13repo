<script>
    const EuropaiUnio = [{
        orszag: "Ausztria",
    csatlakozas: "1995.01.01"
    },
    {
        orszag: "Belgium",
    csatlakozas: "1958.01.01"
    },
    {
        orszag: "Bulgária",
    csatlakozas: "2007.01.01"
    },
    {
        orszag: "Ciprus",
    csatlakozas: "2004.05.01"
    },
    {
        orszag: "Csehország",
    csatlakozas: "2004.05.01"
    },
    {
        orszag: "Dánia",
    csatlakozas: "1973.01.01"
    },
    {
        orszag: "Egyesült Királyság",
    csatlakozas: "1973.01.01"
    },
    {
        orszag: "Észtország",
    csatlakozas: "2004.05.01"
    },
    {
        orszag: "Finnország",
    csatlakozas: "1995.01.01"
    },
    {
        orszag: "Franciaország",
    csatlakozas: "1958.01.01"
    },
    {
        orszag: "Görögország",
    csatlakozas: "1981.01.01"
    },
    {
        orszag: "Hollandia",
    csatlakozas: "1958.01.01"
    },
    {
        orszag: "Horvátország",
    csatlakozas: "2013.07.01"
    },
    {
        orszag: "Írország",
    csatlakozas: "1973.01.01"
    },
    {
        orszag: "Lengyelország",
    csatlakozas: "2004.05.01"
    },
    {
        orszag: "Lettország",
    csatlakozas: "2004.05.01"
    },
    {
        orszag: "Litvánia",
    csatlakozas: "2004.05.01"
    },
    {
        orszag: "Luxemburg",
    csatlakozas: "1958.01.01"
    },
    {
        orszag: "Magyarország",
    csatlakozas: "2004.05.01"
    },
    {
        orszag: "Málta",
    csatlakozas: "2004.05.01"
    },
    {
        orszag: "Németország",
    csatlakozas: "1958.01.01"
    },
    {
        orszag: "Olaszország",
    csatlakozas: "1958.01.01"
    },
    {
        orszag: "Portugália",
    csatlakozas: "1986.01.01"
    },
    {
        orszag: "Románia",
    csatlakozas: "2007.01.01"
    },
    {
        orszag: "Spanyolország",
    csatlakozas: "1986.01.01"
    },
    {
        orszag: "Svédország",
    csatlakozas: "1995.01.01"
    },
    {
        orszag: "Szlovákia",
    csatlakozas: "2004.05.01"
    },
    {
        orszag: "Szlovénia",
    csatlakozas: "2004.05.01"
    }
    ]

    // 1.Hány tagja van az EU-nak?

    function EuTagSzamlalo(adat){
        let sum=0;
    for(i=0;i<adat.length;i++){if(adat.orszag!==""){sum++}}
return sum}
    document.write(`Az EU tagországok száma: ${EuTagSzamlalo(EuropaiUnio)}<hr>`);

        // 2.Hány ország csatlakozot 2007-ben...

        function EuCsatlakozasEv(adat,csatlakozasEv){
            let sum=0;
        for(i=0;i<adat.length;i++){if(adat[i].csatlakozas.includes(csatlakozasEv)==true){sum++}}
        return document.write(`A ${csatlakozasEv}. évben csatlakozott EU tagországok száma: ${sum}<hr>`)}
            EuCsatlakozasEv(EuropaiUnio,2007)

            // 3.Csatlakozot-e Magyarország az európai unióhoz? Igen/Nem?

            function EuCsatlakozasOrszag(adat,orszag){
                let csatlakozott=false;
            for(i=0;i<adat.length;i++){if(adat[i].orszag.includes(orszag)==true){csatlakozott = true}}
            if(csatlakozott==false){csatlakozott = "Nem"}
            else csatlakozott="Igen"
            return document.write(`${orszag} ${csatlakozott} csatlakozott EU-hoz<hr>`)}
                EuCsatlakozasOrszag(EuropaiUnio,"Magyarország")

                // 4.Volt-e májusban csatlakozás? Igen/Nem?

                function EuCsatlakozasHonap(adat,honap){
                    let csatlakozott=false;
                for(i=0;i<adat.length;i++){if(adat[i].csatlakozas.includes(".0"+honap+".")==true){csatlakozott = true}}
                if(csatlakozott==false){csatlakozott = "Nem"}
                else csatlakozott="Igen"
                return document.write(`Az ${honap}. hónapban ${csatlakozott} csatlakozott EU-hoz új tagország<hr>`)}
                    EuCsatlakozasHonap(EuropaiUnio,"5")

                    // 5.Melyik ország csatlakozot utoljára?

                    function EuCsatlakozasUtolso(adat){
                        let datumIndex=0;
                    for(i=0;i<adat.length;i++){if(Number(adat[i].csatlakozas.replaceAll(".",""))>Number(adat[datumIndex].csatlakozas.replaceAll(".",""))){datumIndex = i}}
                    return document.write(`A(z) ${adat[datumIndex].orszag} csatlakozott EU-hoz utoljára<hr>`)}
                        EuCsatlakozasUtolso(EuropaiUnio)

                        // 6.Ország Statisztika, melyik évben hány ország csatlakozot

                        function EuCsatlakozasEvenkent(adat){
                            let evenkent=[]
// for(i=0;i<adat.length;i++){evenkent.push({ orszag: adat[i].orszag, ev: Number(adat[i].csatlakozas.slice(0, 4)) })}
                        for(i=0;i<adat.length;i++){
                            let sum=0;
                        for(j=0;j<adat.length;j++){if(adat[i].csatlakozas.slice(0,4)==adat[j].csatlakozas.slice(0,4)){sum++}}
                        let iter=false
                        for(k=0;k<evenkent.length;k++){if(evenkent[k].ev==adat[i].csatlakozas.slice(0,4)){iter = true}}
                        if(iter==false){{ evenkent.push({ ev: adat[i].csatlakozas.slice(0, 4), tagok: sum }) }}
}
                        return evenkent
}
                        EuCsatlakozasEvenkent(EuropaiUnio)

                        function Kiiratas(tomb){
for(i=0;i<tomb.length;i++){document.write(`${tomb[i].ev}: ${tomb[i].tagok}<br>`)}
}
                        Kiiratas(EuCsatlakozasEvenkent(EuropaiUnio))

                    </script>

