/* 
+OSI Model Introduction (Open System Interconnection)

  ? Layer 3 - Network Layer (packet)
    Devices layer 3:
      -Routers (have routing table and can forward packets to the correct port)
    IP packet structure (more important):
      -Source IP address (IP address of the device that sent the packet)
      -Destination IP address (IP address of the device that is the intended recipient of the packet)
      -Protocol (identifies the protocol being used, e.g. TCP(6) or UDP (17))
      -TTL (Time To Live) - how many hops the packet can make before it is discarded
      -version (IPv4 or IPv6)
      -data (the data being sent)
    IP adressing v4:
      -32 bits (4 bytes) - 4 octets 133.33.3.7 dotted decimal notation 4x 0-255
      Have 2 parts:
        -Network ID - wich IP network  this IP address belongs to
        -Host ID - wich device on the network this IP address belongs to
      If the network part of two IP addresses much, it means they are on the same IP network. If not, they are on different networks.
        10000001.10000010.10000011.10000100 = IP addresses are actually binary 4 sets of 8 bits, (octets) for a total of 32 bits. left to right.
      Network can has a /16 prefix, which means that the first 16 bits of the IP address are the network ID and the last 16 bits are the host ID.
      IP addresses are assigned by machine DHCP or humans
    Subnet mask:
      Subnet masks are a critical part of IP networking. They are configuring on layer 3 interfaces along with IP addresses.
      Subnet mask of what a law an IP device to know If an IP address which is communicated with is on the same network or not.
    Layer free is a common protocol, Which can spawn multiple different layers 2 networks 
    We can't use L2 for internet:
      -networks use different L2 protocols (Ethernet, Wi-Fi, 5g etc. use frame different format)
    IP Internet protocol is a layer free protocol, which adds cross network IP addressing and routing to move data between local area networking without direct peer to peer links.
      You get IP address from your ISP (Internet Service Provider) and it's unique to your device. And we can use it walk across networks using routing.
      Device wich we use now have 2 IP addresses:
        -Public IP address - unique to your device and it's used to communicate with other devices on the internet.
        -Private IP address - unique to your device and it's used to communicate with other devices on your local network.
      And servers have 2 IP addresses:
        -Public IP address - unique to your device and it's used to communicate with other devices on the internet.
        -Private IP address - unique to your device and it's used to communicate with other devices on your local network.
      IP packages moove through the internet using a routing table, which is a list of IP addresses and the next hop to get to that IP address.
    Solve problems:
      -Identifiable devices - IP address - It allows device to device communication rather than broadcast which L1 does.
      -Routing - how to get from source to destination
    

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
*/