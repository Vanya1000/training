/* 
+OSI Model Introduction (Open System Interconnection)


  ? Layer 7 - Application Layer
    Protocols: HTTP, HTTPS, FTP, SSH, Telnet, SMTP, DNS, DHCP, SNMP, TFTP, NTP, IMAP, POP3, LDAP, RDP, VNC, etc.
      DNS - Domain Name System Transorm domain name to IP address
        Advanteges:
          -Human readable
          -Possible to change IP address without changing domain name
        Utils:
          nslookup - query Internet name servers interactively
        features:
          -Not exist 1 DNS server, exist many DNS servers
          -Delegation - DNS servers can delegate authority to other DNS servers
            -Namespace divided different parts
            -Each part has a different DNS server
          Reliability:
            -duplication DNS servers
        Structure domen name:
          www.google.com.
          -root - . (dot)
          -TLD - Top Level Domain (com, net, org, ru, ua, etc.)
            have 3 types:
              -country code TLD (ccTLD) - ua, ru, etc.
              -generic TLD (gTLD) - com, net, org, etc.
              -infrastructure TLD (iTLD) - edu, gov, mil, etc.
          -2LD - Second Level Domain (cisco, google, etc.)
          -3LD - Third Level Domain (www, mail, etc.) Computer name in domain?
        Domain zone:
          -Root zone - . (dot) -  contains all TLDs
          -Top Level Domain zone (com, net, org, ru, ua, etc.) - contains all 2LDs
          -Second Level Domain zone (cisco, google, etc.) - contains all 3LDs
          Every zone can serve many DNS servers 
  ? Layer 6 - Presentation Layer
    Task presentation layer:
      -Data encryption  (SSL, TLS)
      -Data compression (ZIP, RAR)


  ? Layer 5 - Session Layer
    Protocols: RPC, NetBIOS, etc.

  ? Layer 4 - Transport Layer (segment)
    Task transport layer:
      -Passing data between processes on different hosts
      -Adressation (PORT)
      -Reliability independent of the network
    Host works on all 7 layers, network devices work on 1-3 layers
    Adressing:
      Porst - 16 bits (2 bytes) 0-65535
      Every network app has a port number (can't repeat)
      Types of ports:
        -Well-known ports - 0-1023
          -FTP - 20, 21
          -SSH - 22
          -Telnet - 23
          -SMTP - 25
          -DNS - 53
          -HTTP - 80
          -HTTPS - 443
          use can only administrator
        -Registered ports - 1024-49151
        -Dynamic ports - 49152-65535 - automatically assigned by OS

    Layer 3 problems:
      -no guarantee of delivery
      -no guarantee of order
      -layer 3  there are no communication chanel - packets have SRS and DST IP address, but no method splitting by APP or Channel
    TCP - Transmission Control Protocol
      Slover but more reliable
      TCP segments:
        Header:
          -source port 
          -destination port
          - sequence number
          - acknowledgment number
          - flags (SYN, ACK, FIN, RST)
          - window size (how many bytes can be sent)
          - checksum (error detection)
          - urgent pointer (urgent data)
        Data
      TCP connection:
        With TCP everithing is connection oriented. You can't send data without first creating a connection.
          Both sides need to agree on some starting parameters.
        -3 way handshake
          ACK - acknowledge
          SYN - synchronize
          FIN - finish
          RST - reset
          1. Client send SYN to server. sequence = cs (Hey server, I want to connect to you)
          2. Server send SYN and ACK to client. sequence = ss acnowledgment = cs + 1 (Sure, let's talk. 
            My sequence number is ss, and I'm expecting your next packet to have a sequence number of cs + 1)
          3. Client send ACK to server. sequence = cs + 1 acknowledgment = ss + 1 (Ok, I'm ready to talk.

    UDP - User Datagram Protocol
      Fast but less reliable
      Header: lesss than TCP
        -source port
        -destination port
        -length UDP
        -checksum
      Don't connect, don't have 3 way handshake
      Errors fixed by application layer
      For example DNS:
        -DNS server send request to DNS client www.cisco.com => 184.86.0.170 use UDP port 53
        1) Which IP address is www.cisco.com?
        2) Get the IP address of the DNS server
        Used only 2 datagrams, even if error - it's more fast then TCP


  ? Layer 3 - Network Layer (packet)
    Devices layer 3:
      -Routers (have routing table and can forward packets to the correct port)
    
    In network use 2 types of addressing:
      Local addressing:
        -Adress in technology Data Link Layer
        -for example MAC address in Ethernet, IMEI in 4G
        -bind to concrete technology
        -can't use in heterogeneous network
      Global addressing:
        -Adress in technology Network Layer
        -for example IP address in Internet
        -don't bind technology
        -apply when unification network (internet)
    2 version  IP protocol:
      -IPv4 - 32 bits (4 bytes) - 4 octets
      -IPv6 - 128 bits (16 bytes) - 16 octets
      IP adressing v4:
          -32 bits (4 bytes) - 4 octets 133.33.3.7 dotted decimal notation 4x 0-255
          Have 2 parts:
            -Network ID - wich IP network  this IP address belongs to
            -Host ID - wich device on the network this IP address belongs to
          +Router work with Network(subnet)!!! Not with Host!!!
          If the network part of two IP addresses much, it means they are on the same IP network. If not, they are on different networks.
            10000001.10000010.10000011.10000100 = IP addresses are actually binary 4 sets of 8 bits, (octets) for a total of 32 bits. left to right.
          Network can has a /16 prefix, which means that the first 16 bits of the IP address are the network ID and the last 16 bits are the host ID.
          IP addresses are assigned by machine DHCP or humans
          Example:
            IP address: 213.180.193.3
            numer subnet: 213.180.193.0
            number host: 3 (0.0.0.3)
    Subnet mask:
      Subnet masks are a critical part of IP networking. They are configuring on layer 3 interfaces along with IP addresses.
      Subnet mask of what a law an IP device to know If an IP address which is communicated with is on the same network or not.
      Decimal representation of subnet mask:
        IP address: 213.180.193.3
        Subnet mask: 255.255.255.0
        Adress subnet: 213.180.193.0
      Prefix notation:
        IP address: 213.180.193.3/24 (first 24 bits are network ID, last 8 bits are host ID)
        Adress subnet: 213.180.193.0
      old classification: (don't use)
        A - 1.0.0.0 - 126.0.0.0 (8 bits for network ID, 24 bits for host ID)
        B - 128.0.0.0 - 191.255.0.0 (16 bits for network ID, 16 bits for host ID)
        C - 192.0.0.0 - 223.255.255.0 (24 bits for network ID, 8 bits for host ID)
        D - 224.0.0.0 - 239.255.255.255 (multicast)
        E - 240.0.0.0 - 255.255.255.255 (reserved)
    Types IP addresses:
      -broadcast - 1:all
        213.180.193.255 (255 is broadcast address)
        In IP broadcast packets are sent to all devices on the subnet! Router don't forward broadcast packets!
      -unicast - 1:1
      -multicast - 1:n
    Special IP addresses:
      In number host we can't use 0 and 255 because they are reserved for broadcast and network ID.
        -213.180.193.0 - network ID
        -213.180.193.255 - broadcast address
      Agreement:
        Host use .1 - 213.180.193.1
      0.0.0.0 - default gateway when we don't know IP address
      255.255.255.255 - restrict broadcast address (all host in current network)
      127.0.0.0/8 - loopback address (localhost)
        - network for testing
        -The data is not transmitted to the network, but comes back.
        -127.0.0.1 - current host
    IP Address allocation:
      IP address is unique to your device and it's used to communicate with other devices on the internet.
      IANA (Internet Assigned Numbers Authority) is responsible for allocating IP addresses. https://www.iana.org/
      Regional Internet Registries (RIRs) are responsible for allocating IP addresses to ISPs.
    ?Reserved IP addresses:
      -10.0.0.0/8 - private IP address
      -172.16.0.0/12
      -192.168.0.0/16
      Don't route in internet
      Can use into local network without apply IANA
      Connect to internet via NAT (Network Address Translation)
        Change adress from local network to public IP address (todo: add knowl NAT)
    exhaustion IP addresses:
      Maximum number of IP addresses is 4,294,967,296 (2^32)
      ways to solve:
        -IPv6 - 128 bits (16 bytes) - 16 octets
        -NAT (Network Address Translation)
    Network layer protocols:
      -IP - Internet Protocol (for pass data)
        -pass data without any guarantee of delivery
        -pass data without any guarantee of order
        dont set up a connection between devices
        Tasks of IP:
          -connect many network
          -routing
      -ICMP - Internet Control Message Protocol
        -used to communicate errors and other information between devices
        -testig network
          -ping
          -traceroute
      -ARP - Address Resolution Protocol
        Allow to resolve IP address to MAC address. Bind network layer to data link layer.
          we can find table in linux: cat /etc/ethers  MAC:IP
          but in big network we can't use this table, and ARP help us to find MAC address
        Computer send ARP broadcat request to all devices on the network. If device have IP address which we need, it send ARP unicast response to us with MAC address. 
        But we can use it only in local network, because we can't send broadcast in internet  through router.
      -DHCP - Dynamic Host Configuration Protocol
        -automatic configuration of DNS servers
        -handing out IP addresses (small networks)
    routing stages:
      -Studying the network
      -forwarding the packet
        3 ways:
          1) router connect to aim network => forward packet to aim network
          2) router know router which connect to aim network => forward packet to this router
          3) router don't know router which connect to aim network => discard packet
        Table routing:
          -address network 
          -mask network
          -geyway - if on link => network connected to router, if not => IP address router which connect to network
          -interface (Tell us which router interface we need to send the packet through.)
          -metric (how many hops)
    Solve problems:
      -Identifiable devices - IP address - It allows device to device communication rather than broadcast which L1 does.
      -Routing - how to get from source to destination
    Layer 3 uses mainly: 
      -IP addresses (IPv4/IPv6) - cross network addressing
      -ARP - find the MAC address, for this ip
      -Route  - where to forward this packet
      -Route table - multiple routes
      -Router - moves packets from SRC to DST - Encapsulating in L2 on the way.
      -Device <=> Device communication over the internet
    no
      -No method for channels of comunications .. SRC IP <=> DST IP only
      -Can be delivered out of order
    
    / Layer 3 is a common protocol, Which can spawn multiple different layers 2 networks 
    / We can't use L2 for internet:
    /   -networks use different L2 protocols (Ethernet, Wi-Fi, 5g etc. use frame different format)
    / IP Internet protocol is a layer 3 protocol, which adds cross network IP addressing and routing to move data between local area networking without direct peer to peer links.
    /   You get IP address from your ISP (Internet Service Provider) and it's unique to your device. And we can use it walk across networks using routing.
    /   Device wich we use now have 2 IP addresses:
    /     -Public IP address - unique to your device and it's used to communicate with other devices on the internet.
    /     -Private IP address - unique to your device and it's used to communicate with other devices on your local network.
    /   And servers have 2 IP addresses:
    /     -Public IP address - unique to your device and it's used to communicate with other devices on the internet.
    /     -Private IP address - unique to your device and it's used to communicate with other devices on your local network.
    /   IP packages moove through the internet using a routing table, which is a list of IP addresses and the next hop to get to that IP address.
  ? Layer 2 - Data Link Layer (frame)
    Devices layer 2:
      -Switches (have MAC address table and can forward frames to the correct port)
        If a frame is received on a port, the switch will check the destination MAC address in the frame header and compare it to the MAC address table.
          -If the MAC address is found in the table, the switch will forward the frame to the port specified in the table.
          -If the MAC address is not found in the table, the switch will broadcast the frame to all ports except the port the frame was received on.
    Protocols: Ethernet, Token Ring, FDDI, ATM, Frame Relay, PPP, HDLC, ISDN, X.25, etc.
    Devices at L2 have a unique hardware MAC address e.g. 00:0c:29:3f:5c:5d (48 bits in HEX), 24 bits for manufacturer.
      Frames can be addressed to a destination or broadcast(ALL F's). 
    Components Ethernet Frame:
      MAC HEADER:
        1) Preamble - 56 bits SFD - 8 bits (Start Frame Delimiter)
        2) Destination MAC - 48 bits
        3) Source MAC - 48 bits (allows receive replies)
        4) EtherType - 16 bits (identifies the protocol being used, e.g. IPv4 or IPv6) which layer 3 protocol originally put data into that frame.
      PAYLOAD - 46-1500 bytes (46 bytes is the minimum size of a frame)
        The payload is the data the frame carries from source to destination is generally provided by layer 3 and the either type attribute defines which layer 3 protocol is being used.
      TRAILER - 4 bytes (FCS - Frame Check Sequence)
        The trailer is used to check for errors in the frame. It is a 32 bit CRC (Cyclic Redundancy Check) value.
    Solve problems:
      -Identifiable devices - MAC address - It allows device to device communication rather than broadcast which L1 does.
      -Media access control - (sharing) - avoiding collisions and cross-talk
      -Collision detection - if collision detected, jam signal is sent to all devices on the network
      -Unicast communication - frames are sent to a specific device 1:1, broadcast 1: all
      -Switches - Like cops with super powers. (Layer 2)
  ? Layer 1 - Phisical Layer (bit)
    Spetification define the transmission and reception of raw BIT STREAMS beetwen and SHARED physical medium
    Devices layer 1:
      -Hubs (repeaters - only repeat the signal dumbly)
    It defines things like:
      -voltage levels
      -timing
      -rates
      -distances
      -modulating and connectors
    Bynary 1(+1v) and 0(-1v)
    Physical medium can be copier(electrical) fiber(light) or wi-fi(RF).
    If exist only 1 physical layer:
      -Player one has no media access control and no collision detection.
      -No device addressing all data is processed by all devices.  
      -If multiple device transmit at once, a collision occurs
      -Anything received on any port is transmitted on every other port, *including a errors and collisions.

+ TLS/SSL
  -SSL - Secure Sockets Layer(deprecated)
    -SSL 1.0 - 1994 
    -SSL 2.0 - 1995
    -SSL 3.0 - 1996
  -TLS - Transport Layer Security
    -TLS 1.0 - 1999
    -TLS 1.1 - 2006
    -TLS 1.2 - 2008
    -TLS 1.3 - 2018
  Place in OSI model:
    -Layer 4 - Transport Layer - pass data between process as well as Transport Layer 
    -Layer 5 - Session Layer - establish, manage and terminate sessions
    -Layer 6 - Presentation Layer - data encryption and decryption
  3 aspect defend data:
    ?1) Privacy - data is encrypted
      the attacker can not read the data
      Instruments for defend:
      2 ways of encryption:
        symmetric - one key for encrypt and decrypt (server and client have same key)
          fast encryption and decryption
          aloritms: AES, DES, 3DES, RC4
        asymmetric - two keys for encrypt and decrypt (server and client have different keys - private and public) - data encrypted with public key and decrypted with only private key
          aloritms: 
          -DH(Diffie-Helman),
            Base algoritm!
            1) Before communication, both parties generate a random number and send it to each other (for example, p=29, g=3) and also gen priveate 5 and 8
            2) Client calculate the public key (A=3^5 mod 29 = 11) and pass 11 to server.
            3) Server calculate the public key (B=3^8 mod 29 = 7) and pass 7 to client.
            4) Client calculate the secret key (K=7^5 mod 29 = 16) and pass 16 to server.
            5) Server calculate the secret key (K=11^8 mod 29 = 16) and pass 16 to client.
            6) Both parties have the same secret key (16) and can use it to encrypt and decrypt messages.
            Conditions:
              -p is a prime number min 1024 bit
              -g is a primitive root of p
              -not possible calculate even contemporary computers
            There are more perfect algoritm - ECDH(Elliptic Curve Diffie-Helman)
          -RSA(Rievest-Shamir-Adleman), 
            Don't ensure perfect direct secrecy - key don't change, and if malicious user intercept key, he can decrypt all data wich save before
          -DSA, 
          -ECC
          slow encryption and decryption but safe
        Hybrid encryption - combination of symmetric and asymmetric encryption
          Assymentric encryption for pass symmetric key
          Symmetric encryption for encrypt data
    ?2) Integrity - data is not modified
      the attacker can not modify the data
      Instruments for defend:
        -hash function
          Transform data to hash string concrete length (malicious user can't determine original data)
          Problem: collision - two different data can have same hash
          Criptographic hash function:
            -SHA-1(Secure Hash Algoritm) - 160 bit
            -SHA-256 - 256 bit
            -SHA-512 - 512 bit
            -MD5 - 128 bit - deprecated
        1) When cliend want pass data he calculate hash and send data and hash to server. (addition hash calculated not only data but also private key) => MAC (Message Authentication Code) |data|MAC|
        2) Server calculate hash and compare with hash from client. If hash is same, data is not modified.
      Restrict MAC - Not possibility confirm authenticity server (attak man in the middle) help next algoritm
    ?3) Authentication - the sender is who they say they are
      the attacker can not impersonate the sender
      Instruments for defend:
        -digital signature
        -public key infrastructure (PKI)
      Problem: 
        We connect to server and exchange keys, but how we can be sure that server is real server and not malicious user?
      Solution:
        If usually in symetric encryption we use public key for encrypt and private key for decrypt, but in digital signature we use private key for encrypt and public key for decrypt.
          It seems wierd, but if we can decript with public key we can ensure that we use key from server. (For example bank server)
          In digital signature encript not all data, but only hash of data. With for example SHA-256
          Hash encrypt with private key and send client
          Client get data and with public key decrypt digital signature and apply hash to data and compare with hash from digital signature.
          .!!But it's not enough, because malicious user can intercept request and send to client fake digital signature. (and hash will be same)
          Solution:
            It is assumed that net consist clients and servers which no trust each other, but trust to CA (Certificate Authority)
            Certificate Authority (CA) take server sertificate (file special format) base component is public key and sign it with private key AC. Client also have AC public key(assusms that true)).
      public key infrastructure (PKI) consist of:
        -root certificate authority (CA) - dont take sertificate
        -with root CA work intermediate CA which take sertificate.
        -server get sertificate from CA
        -use chain trust - client have root CA public key and intermediate CA public key. Client get sertificate from intermediate CA and intermediate CA get sertificate from root CA.
        -client should go through all chain of trust and check if all sertificates are valid.
          -ISRG Root X1 - root CA
            -Let's Encrypt Authority X3 - intermediate CA
              -www.black.uivi.cc - server
      Last problem how we knownthat sertificate root CA is real root CA and not malicious user?
        Solution:
          In OS we have root CA sertificate and we can check if sertificate is valid. Sertificate write in this storage whet we install OS.
      Self signed sertificate - sertificate which we create by ourself. It's not safe, because malicious user can intercept sertificate and send to client.
  ?How work Protocol TLS:
    | HTTPS |
    | TLS   |!
    | TCP   |
    | IP    |
    | L2    |
    | L1    |
    Also TLS consist of:
    |Handshake protocol| Alert protocol | Change cipher spec protocol | Application data protocol |
                                    Record protocol
    Record protocol: (base TLS)
      Format:
        |type message(not encripted)|version protocol(not encripted)|length message(not encripted)|data(encripted)|
    Session TLS:
      Shipers collect
        -Algoritm symetric encryption and MAC
      Keys:
        -symetric encryption key
        -MAC key
      Description session:
        -ID session
        -ID client
      Create session:
        -Handshake protocol
        -resuming session, which already created previously
    How work passing data when session created:
      client <---------------------------------------> server
      key symetric encryption                          key symetric encryption
      key MAC                                          key MAC
    clientsget data from above (https) can be huge  => split data to small packets => calc MAC |data|MAC| => encrypt => send to server
  ? Install connection TLS 1.2:
    1) Client send to server message Client Hello with:
      -Shipers collect which client support
      -client random number
    2) Server send to client message Server Hello with:
      -Shipers which server coose from client list
      -server random number
      -ID session (if client want resuming session in future)
    3) Server send to client message Certificate with:
      File special format which contain:
        sertificate center authority (CA) with signed digital signature (client can check with public key CA)
    4) Client check sertificate CA:
      -check if sertificate CA is valid
      -check domain name
      -check if sertificate CA is not expired
      -check if sertificate CA is not revoked
      -check if sertificate CA is not self signed
    5)  Server send Server key exchange with:
      data for create symetric encryption key (p,g,Y)
    6) Server Hello Done ( it does mean that server pass all data regard 1 phase of handshake)
    7) Client send Client key exchange with (you can see above)
    After this stage client and server have symetric encryption key and MAC key
    8) Client send Change cipher spec (it does mean that client pass all data regard 2? phase of handshake)
    9) Cliend send finished (and encript data with symetric encryption key and MAC key)
    10) Server send Change cipher spec 
    After this stage client and server installed session TLS
    If all good few message can be joint in one message
+ HTTPS:
https://www.youtube.com/watch?v=1r1iWq67v3c&list=PLtPJ9lKvJ4oiFnWCsVRElorOLt69YDEnv&index=12
  Repeat HTTP
    1) install connect TCP
      TCP connection: 
      client ------------SYN--------> server
      client ------------SYN+ACK--------> server
      client ------------ACK--------> server
    2) Client send to server GET:
      Get / HTTP/1.1
      Host: www.black.uivi.cc
    3) Server send to client response:
      HTTP/1.1 200 OK
      Content-Type: text/html
      ...
  HTTPS - HTTP over TLS (443 port and server know that it's HTTPS)
    1) install connect TCP (wach above)
    2) Try install connect TLS and send Client Hello (wach above)
    After successful install connect TLS:
    3) Client send to server GET:
    4) Server send to client response:
+ 3 types DDOS attack:
  -Apllication layer HTTP flood
  -Protocol attack (SYN flood) - TCP
  -Volumetric attack (ping flood) - ICMP

+ VLANs, TRUNKS & QinQ
  -VLAN - Virtual Local Area Network
    Use in Data Link Layer
    802.1Q - IEEE standard for VLANs
      Add to Ethernet frame 4 bytes (32 bits) with VLAN ID and when we receive frame we can check VLAN ID and send frame to correct port.
      For example when FF packet come to switch, switch check VLAN ID and send packet to port 1.
  For what we use VLANs:
    -Create separate L2 network segments
    -Isolated ..trafic isolation
      ..different customers..
      ..different networks (AWS Direct Connect VPCs)
    -separete broadcast domains
    -802.1Q(VLANS) .. 802.1AD (nested QinQ VLANs) 
+Decemal to binary
  Table:
    Position:        |  1  |  2 |  3 |  4 | 5 | 6 | 7 | 8 |
    Binary position: | 128 | 64 | 32 | 16 | 8 | 4 | 2 | 1 |
  Dec => Bin:
    Moving throught the binary table left to right
    1) Compare decimal number to the binary position val, if SMALLER WRITE 0 => Move on to the next table position, go to #1
    2) IF IT IS EQUAL OR LARGER - Minus the binary position value from your decimal number at one, add 1 in the binary value column.
    3) Move on to next position go to #1(which the new decimal value)
+BGP
  Border Gateway Protocol (BGP) is a routing protocol used to exchange routing information between different networks on the internet. 
    BGP is the protocol that enables the internet to function as a global network of interconnected networks. BGP is responsible for choosing 
    the best path for network traffic to follow from one network to another, and for announcing that path to other routers on the internet. In this lesson, we will explore the key features of BGP.
  -Border Gateway Protocol
  -Protocol for exchanging routing information between autonomous systems
  -BGP is a TCP based protocol
  -BGP is a path vector protocol
  -BGP is a distance vector protocol
  
*/
