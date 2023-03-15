/* 
+OSI Model Introduction


  ? Layer 2 - Data Link Layer (frame)
    Protocols: Ethernet, Token Ring, FDDI, ATM, Frame Relay, PPP, HDLC, ISDN, X.25, etc.
    Devices at L2 have a unique hardware MAC address e.g. 00:0c:29:3f:5c:5d (48 bits in HEX), 24 bits for manufacturer.
      Frames can be addressed to a destination or broadcast(ALL F's). 
    Different components:
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
      -ControlControl access to the physical medium
  ? Layer 1 - Phisical Layer (bit)
    Spetification define the transmission and reception of raw BIT STREAMS beetwen and SHARED physical medium
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