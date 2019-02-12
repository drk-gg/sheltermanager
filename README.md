
Grundsätzlich möchten wir im Bereich des DRK gerne eigenentwickelte OpenSource Softwarelösungen als Strategie pushen. Grund ist folgender: Wir haben keinen Grund Lösungen, die wir selbst anfertigen oder anfertigen lassen nicht als OpenSource zu entwickeln  oder entwickeln zu lassen. Es gibt keine "echten" Wettbewerber (MHD, Johanniter, etc. haben auch nur begrenzte Helferresoucen und das Ziel Menschen zu helfen), wir verdienen mit der Software kein Geld, etc.
Ziel ist es unsere Helfer zu entlasten bzw. zu unterstützen. Entwickelt jemand auf Basis von unserer Software etwas oder macht einen Pullrequest auf unseren Code. Super! Dann mussten wir keine Helferstunden oder Spendengelder dafür ausgeben und können gemeinsam ein besseres Gesamtergebnis zum Wohl der Helfer und der Bevölkerung erreichen.


Hierfür hat das Projekt die offizielle Rückendeckung des Kreisverbandes Groß-Gerau.
Die zugehörige, offizielle Github-Page ist https://github.com/drk-gg. Sie ist auf Grund des frühen Standes natürlich noch etwas Übersichtlich. Was wir dringend brauchen sind Personen mit Erfahrung in IT und Softwareentwicklung. Aktuell sind wir nur 2 Entwickler aus den Reihen des DRK Kreisverbandes Groß-Gerau und ein paar Softwareentwickler, die grundsätzlich Bereitschaft erklärt haben zu unterstützen.


Zu den Projekten zu denen es aktuell konkretere Überlegungen gibt:


# Betreuungsplatzverwaltung:

Während der Hochphase der Flüchtlingsunterbringung 2015/16 war die Registrierung und Verwaltung der Beleglisten und das Führen von gewissen Grunddaten extrem wichtig. Das selbe Problem haben wir eigentlich immer, wenn wir einen Betreuungsplatz 50 oder 500 aufbauen. Es müssen Bewohner verwaltet, Betten zugeordnet, Materialausgaben dokumentiert und Lagerlogistik überwacht werden. Diese ganzen Prozesse und Betriebsabläufe könnten gut mit einer oder mehreren Softwarelösungen unterstützt werden. Wir haben hier eine Funktionalitätslücke zwischen Xenios, Einsatzleitsoftware und Warenwirtschaftssystemen. Dieser Softwarestack würde sich gut durch eine Lösung ergänzen lassen, die auch ohne Internet (z.B. per WLAN und lokalem Server) einfach von unseren Helfern (auch ohne große IT-Kenntnisse) betrieben werden kann. 

##1. Registrierungs-/Verwaltungstool für die Betreuungsstelle

Begonnen wurde mit einem (Web-)App-Mock der die Registrierung von Betroffenen per App und/oder Browser ermöglichen soll. Im Nachgang sollen die Daten dann gegen einen (lokalen) Backend-Server oder Proxy gesyncht werden können. Die Eingabemaske in der App soll explizit den Registrierkarten des Suchdienstes bzw. Ausweis- und Bezugskarte nachgebaut sein. Das jeder Helfer erkennt wie das System zu benutzen ist bzw. eine solche Karte einfach überspielen kann. Später sollen dann "Expertenmasken" für Statistische Auswertungen, Verwaltungsaufgaben, schnellere Datenerfassung für Experten, etc. dazu kommen.
Als Grundlage für die App ist aktuell geplant das Ionic-Framework zu benutzen (https://ionicframework.com/), da wir so relativ leicht Apps für diverse Endgeräte und Betriebsysteme mit der selben Codebasis erstellen können.
Ein Github-Repo ist erstellt, aber der aktuelle Code noch nicht hochgeladen. https://github.com/drk-gg/sheltermanager. Der erste Code wird hochgeladen, sobald es mit dem Coden weitergeht (ca. Q2 2019).
    Ein paar aktuelle Screenshots werden demnächst hochgeladen.

##2. Anbindung an Xenios bzw. Backend von Xenios:

Die Registrierdaten aus der Betreuungsstellenverwaltung sollten mit Xenios gesyncht werden können, damit diese an die KABs bzw. den Landessuchdienst übergeben werden können.

##3. Anbindung an Einsatzleitsysteme

Die Statistikdaten bzw. Lagerlogistikdaten sollten an eventuell an Einsatzleit- und/oder Stabssoftware gespiegelt werden können um Lagemeldungen zu erleichtern und Bestellungen auf dem Dienstweg vorzubereiten.

##4. Anbindung an internationale Katastrophenschutzkoordinationslösungen (z.B. Sahana Eden oder Xenios-Backend)

#Neuimplementierung von Xenios bzw. alternativer kompatibeler Client:

Von mehreren KABs wurden den Entwicklern berichtet, dass sie mit der aktuellen Version von Xenios nicht zufrieden sind (ist wohl restlos veraltet). Hier könnten eine Reimplementierung mit entsprechenden Anpassungen als OpenSource Variante Sinn machen. Diese sollte natürlich zu den Altsystemen kompatibel sein. Im Endefekt würde es sich im ersten Schritt nur um eine neue Clientsoftware für die Registrierungs-PC's handeln. Hierbei ist natürlich auf die kompatibilität zum bestehenden System zu achten.

#Sonstige Projekte

Es gibt sonst noch zahlreiche Projekte viele Entwickler in den Reihen des DRK und anderer Hilfsorganisationen "mal schnell" irgendwas hilfreiches skripten oder coden. Hier sollte es mehr Wissenaustausch geben, um doppelte und Mehrarbeit zu vermeiden. Das soll ein weiterer Zweck dieses Projektes werden.

Fall also jemand Interesse hat dieses Projekt zu unterstützen und aktiv mitzugestallten würden wir uns sehr freuen. Wir sind über alle Mithilfe froh, sei es im Bereich Softwareentwicklung, Dokumentation oder Betatesting. Sollte jemand Ideen für weitere Software-Projekte haben würden wir uns auch über diese Vorschläge freuen und in weitere Üblegungen einbeziehen.

Kontaktdaten und Kommunikationskanäle für das Projekt werden demnächst ergänzt.
