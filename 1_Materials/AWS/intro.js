/* 
!Introduction https://aws.amazon.com/getting-started/cloud-essentials/
What is cloud computing?  
  Cloud computing is the on-demand delivery of compute power, database, storage, applications, and other IT resources through a cloud services platform through the internet with pay-as-you-go pricing.
  You don’t need to make large upfront investments in hardware and spend a lot of time on the heavy lifting of managing that hardware. 
  You can access as many resources as you need, almost instantly, and only pay for what you use.
  On-demand, pay-as-you-go access to services is fundamental to the cloud computing model.
Advantages of cloud computing
  -Pay as you go - Pay only when you use computing resources, and only for how much you use.
  -Benefit from massive economies of scale -AWS aggregates usage from hundreds of thousands of customers in the cloud, which leads to higher economies of scale. This translates into lower pay-as-you-go prices.
  -Stop guessing capacity -When you make a capacity decision prior to deploying an application, you often end up either sitting on expensive idle resources or dealing with limited capacity.
    with cloud computing, you can scale up or down as needed, and only pay for what you use.
  -Increase speed and agility - IT resources are only a click away, which means that you reduce the time to make resources available to your developers from weeks to minutes. 
    This dramatically increases agility for the organization, because the cost and time it takes to experiment and develop is significantly lower.
  -Realize cost savings - Companies can focus on projects that differentiate their business instead of maintaining data centers.
    With cloud computing, you can focus on your customers, rather than on the heavy lifting of racking, stacking, and powering physical infrastructure.
  -Go global in minutes -  Applications can be deployed in multiple Regions around the world with a few clicks. This means that you can provide lower latency and a better experience for your customers at a minimal cost.
On premises and cloud computing.
  Before the cloud, companies and organizations hosted and maintained hardware in their own data centers, often allocating entire infrastructure departments to take care of their data centers. This resulted in costly 
    operations that made some workloads and experimentation impossible.
  The demand for compute, storage, and networking equipment increased as internet use became more widespread. For some companies and organizations, the cost of maintaining a large physical presence was unsustainable. 
    Cloud computing emerged to solve this problem.
  To help differentiate between running workloads on premises compared to in the cloud, consider a scenario in which a team of developers wants to deploy a few new features in their app. Before they deploy, 
    the team wants to test the features in a separate quality assurance (QA) environment that has the same configurations as production.
IaaS, PaaS, and SaaS
  With the growing popularity of cloud computing, several different service models have emerged to help meet specific needs of different users.
  Each type of cloud service provides you with different levels of abstraction, control, flexibility, and management.
  Understanding the differences between Infrastructure as a Service (IaaS), Platform as a Service (PaaS), and Software as a Service (SaaS) can help you decide what service type is right for your needs as a developer.
  -Infrastructure as a Service (IaaS) - contains the basic building blocks for cloud IT, and typically provides access to networking features, computers (virtual or on dedicated hardware), and data storage space. 
    IaaS provides you with the highest level of flexibility and management control over your IT resources and is most like existing IT resources that many developers are familiar with today.
    Amazon Elastic Compute Cloud (EC2), Amazon Simple Storage Service (S3), Amazon Virtual Private Cloud (VPC), Amazon Elastic Block Store (EBS), Amazon Route 53
  -Platform as a Service (PaaS) - removes the need for you to manage the underlying infrastructure (usually hardware and operating systems) and allows you to focus on the deployment and management of your applications.
    AWS Elastic Beanstalk, AWS Lambda, AWS App Runner, Amazon API Gateway
  -Software as a Service (SaaS) - Software as a Service (SaaS) provides you with a completed product that is run and managed by the service provider. In most cases, people referring to SaaS are referring to end-user applications.
    AWS WorkMail, AWS WorkDocs, AWS WorkSpaces, AWS Chime, AWS AppStream 2.0
Global infrastructure
  AWS has infrastructure all over the world, so developers can deploy applications in multiple physical locations with just a few clicks.
  As our customers grow their businesses, AWS will continue to provide infrastructure that meets their global requirements.
  AWS Cloud infrastructure is built around AWS Regions and Availability Zones.  
  A Region is a physical location in the world where we have multiple Availability Zones.
  Availability Zones consist of one or more discrete data centers, each with redundant power, networking, and connectivity, housed in separate facilities.
    -region - Geographic area to house infrastructure Distributed over the globe. Has multiple availability zones. 
    -availability zone - Data center within a region. Isolated location. Own electricity cooling at networking. Used for height availability and fault tolerance.
    -endpoint - URL to a service. Is a global or regional iam.amazonaws.com, s3.amazonaws.com, ec2.us-east-1.amazonaws.com
Choosing cloud regions
  -Proximity to your users - If your users are in a specific region, you should deploy your application in that region to provide the best possible experience.
  -Service availability - Some services are only available in specific regions. For example, AWS Lambda is only available in the US East (N. Virginia), US East (Ohio), US West (Oregon), EU (Ireland),
  -coast - Certain regions will cost more than others. So use built in calculators to do rough cost estimated to inform your chooses
  -SLA - SLA stands for Service Level Agreement, which is a contract between a service provider and its customers that outlines the level of service the provider will deliver. In the context of Amazon, SLA refers to the commitments 
    that Amazon makes to its customers regarding the reliability and availability of its various services, such as Amazon Web Services (AWS) or Amazon Prime.
    Service level agreement. Some services have SLAs. For example, Amazon S3 has a 99.99% availability SLA.
Developer tools
  How to interact with AWS
    Instead of physically managing infrastructure, you logically manage it, through the AWS Application Programming Interface (AWS API).
    When you create, delete, or change any AWS resource, you will use API calls to AWS to do that.
    You can make these API calls in several ways, but we will focus on these to introduce this topic:
      - The AWS Management Console - The AWS Management Console is a web-based user interface that allows you to manage AWS services.
      - The AWS Command Line Interface (AWS CLI)
      - IDE and IDE toolkits - AWS provides toolkits for several popular IDEs, including Eclipse, IntelliJ, and Visual Studio.
      - AWS Software Development Kits (SDKs) - AWS provides SDKs for several programming languages, including Java, .NET, Node.js, PHP, Python, Ruby, and Go.
Infrastructure as code (IaC)
  AWS CDK
    Infrastructure as code (IaC) is a way of managing your cloud infrastructure and applications through machine-readable definition files, rather than using a physical hardware configuration.
  AWS CloudFormation
    Modeling and setting up AWS resources can be time-consuming. This is where AWS CloudFormation can help. CloudFormation helps you model and set up your AWS resources so that you can spend less time managing resources and more 
      time focusing on your applications. Using CloudFormation, you create a template that describes all the AWS resources that you want (like Amazon EC2 instances or Amazon RDS DB instances). Once you create the template, CloudFormation 
      takes care of provisioning and configuring those resources for you. You don't need to individually create and configure AWS resources and figure out what's dependent on what; CloudFormation handles that. CloudFormation can help 
      you simplify infrastructure management, quickly replicate your infrastructure, and easily control and track changes to your infrastructure.
  difference beetwin AWS CDK and AWS CloudFormation
    -Language: AWS CloudFormation uses JSON or YAML templates to define infrastructure resources, while AWS CDK uses programming languages like Python, TypeScript, or JavaScript.
    -Abstraction: AWS CDK provides a higher level of abstraction than CloudFormation. With CDK, developers can use familiar programming constructs like objects, classes, and functions to define their infrastructure resources, 
      which can make it easier to write and maintain complex infrastructure code.
    -Resource support: AWS CloudFormation has support for a wider range of AWS resources out-of-the-box, while CDK requires developers to define custom constructs to use certain resources that are not yet supported natively.
    -Tooling support: AWS CloudFormation has been around longer and has more mature tooling, including integrations with third-party tools like Terraform and Ansible. AWS CDK is still relatively new, but is gaining 
      in popularity and has some tooling available like AWS CLI and AWS CodePipeline.
    Overall, AWS CDK provides a more developer-friendly approach to infrastructure-as-code than AWS CloudFormation, but the choice between the two ultimately depends on the needs of the specific project and the preferences of the development team.
Function as a Service (FaaS)
  AWS Lambda
    AWS Lambda is a compute service that lets you run code without provisioning or managing servers. AWS Lambda executes your code only when needed and scales automatically, from a few requests per day to thousands per second.
Well-Architected infrastructure.
  Framework overview
    AWS Well-Architected helps cloud architects and developers build secure, high-performing, resilient, and efficient infrastructure for a variety of applications and workloads. Built around six pillars—operational excellence, security, 
      reliability, performance efficiency, cost optimization, and sustainability—AWS Well-Architected provides a consistent approach for you to evaluate architectures and implement scalable designs.
    The AWS Well-Architected Framework includes domain-specific lenses, hands-on labs, and the AWS Well-Architected Tool. The AWS Well-Architected Tool, available at no charge in the AWS Management Console, provides a mechanism 
      for regularly evaluating workloads, identifying high-risk issues, and recording improvements.
Security
  


! IAM 
  AWS Identity and Access Management (IAM) is a web service that helps you securely control access to AWS resources. With IAM, you can centrally manage permissions that control which AWS resources users can access. 
    You use IAM to control who is authenticated (signed in) and authorized (has permissions) to use resources.
    Safeguard your root user credentials and use them to perform the tasks that only the root user can perform.
  Tasks that require root user credentials
    -Change your account settings. (This includes the account name, email address, root user password, and root user access keys. Other account settings, such as contact information, payment currency preference, and AWS Regions, don't require root user credentials.)
    -Restore IAM user permissions. (If the only IAM administrator accidentally revokes their own permissions, you can sign in as the root user to edit policies and restore those permissions.)
    -Activate IAM access to the Billing and Cost Management console.
    -View certain tax invoices.
    -Close your AWS account.
    -Register as a seller in the Reserved Instance Marketplace.
    -Configure an Amazon S3 bucket to enable MFA (multi-factor authentication).
    -Edit or delete an Amazon Simple Storage Service (Amazon S3) bucket policy that includes an invalid virtual private cloud (VPC) ID or VPC endpoint ID.
    -Sign up for AWS GovCloud (US).
    -Request AWS GovCloud (US) account root user access keys from AWS Support.
  IAM gives you the following features:
    -Shared access to your AWS account
      You can grant other people permission to administer and use resources in your AWS account without having to share your password or access key.
    -Granular permissions
      You can grant different permissions to different people for different resources. For example, you might allow some users complete access to Amazon Elastic Compute Cloud (Amazon EC2),
    -Secure access to AWS resources for applications that run on Amazon EC2
      You can use IAM to control access to your Amazon EC2 resources, such as instances and volumes, from applications that run on Amazon EC2.
    -Multi-factor authentication (MFA)
      You can add two-factor authentication to your account and to individual users for extra security.
    -Identity federation
      You can use identity federation to allow users in your corporate directory to access AWS resources using their existing credentials.
    -Identity information for assurance
      You can use IAM to view information about the identity of the person who is making a request to your AWS resources.
    -PCI DSS Compliance
      You can use IAM to help you meet the requirements of the Payment Card Industry Data Security Standard (PCI DSS).
    -Integrated with many AWS services
      For a list of AWS services that work with IAM, see AWS services that work with IAM.
    -Free to use
  Accessing IAM You can work with AWS Identity and Access Management in any of the following ways:
    - AWS Management Console
      The console is a browser-based interface to manage IAM and AWS resources.
    - AWS Command Line Tools
      You can use the AWS command line tools to issue commands at your system's command line to perform IAM and AWS tasks. Using the command line can be faster and more convenient than the console. 
      The command line tools are also useful if you want to build scripts that perform AWS tasks.
    - AWS Software Development Kits (SDKs)
    - IAM Query API
      You can use the IAM Query API to perform IAM tasks programmatically. The IAM Query API is a SOAP-based API that uses XML for requests and responses.
  ? Security best practices in IAM
    -Require human users to use federation with an identity provider to access AWS using temporary credentials
    -Require workloads to use temporary credentials with IAM roles to access AWS
    -Require multi-factor authentication (MFA)
    -Rotate access keys regularly for use cases that require long-term credentials
    -Safeguard your root user credentials and don't use them for everyday tasks
    -Apply least-privilege permissions
    -Get started with AWS managed policies and move toward least-privilege permissions
    -Use IAM Access Analyzer to generate least-privilege policies based on access activity
    -Regularly review and remove unused users, roles, permissions, policies, and credentials
    -Use conditions in IAM policies to further restrict access
    -Verify public and cross-account access to resources with IAM Access Analyzer
    -Use IAM Access Analyzer to validate your IAM policies to ensure secure and functional permissions
    -Establish permissions guardrails across multiple accounts
    -Use permissions boundaries to delegate permissions management within an account
! Serverless Application Model (SAM)
  What is a serverless architecture?
    A serverless architecture is a way to build and run applications and services without having to manage infrastructure. Your application still runs on servers, but all the server management is done by AWS.
    You no longer have to provision, scale, and maintain servers to run your applications, databases, and storage systems. Learn more about serverless computing here.
  Why use serverless architectures?
    By using a serverless architecture, your developers can focus on their core product instead of worrying about managing and operating servers or runtimes, either in the cloud or on-premises.
  Use cases of serverless architectures
    -Web and mobile applications
    -Backend services
    -Data processing
! Agnostic framework
  We use agnostic framework for development our application. Agnostic framework can works with Amazon Azure and Google Cloud. This approach calls infrastructure as a code.
  We don't enter in the console and click it open.Open buckets run EC2 And so on. We use the code to do this. 
  Advantages of infrastructure as a code
    -Cost reduction
    -Faster execution
    -List risk of human errors and security violations
    -Ability to preview proposed configuration changed before committing to value correctness of definition.
    -Automotive dependency management brokers sequencing.












*/