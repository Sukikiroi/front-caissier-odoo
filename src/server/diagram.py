# diagram.py
from diagrams import Diagram
from diagrams.aws.compute import EC2
from diagrams.aws.database import RDS
from diagrams.aws.network import ELB
from diagrams.onprem.compute import Nomad
with Diagram("Web Service", show=False):
    Nomad("Nomad Nomad") >> EC2("web") >> RDS("userdb")