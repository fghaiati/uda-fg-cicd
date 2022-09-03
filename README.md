# Udacity Advanced DevOps Nanodegree - Give Your Application Auto-Deploy Superpowers Project

By: Fathi Ghaiati
About: This is my udacity CICD project 

## Starting
started by simple project with .circleci config.yml 
pushed to github
created circleci project linked to this project
circle ci run successfully 

### Getting & Merging Udacity Starter Project
URL: https://github.com/udacity/cdond-c3-projectstarter
copied folders from starter project: .circleci, frontend, backend & util
 
git add .
git commit -m "copy code from udacity starter project, the following folders: .circleci, frontend, backend & util"
git push -u origin master 

## created screenshots folder for required screenshots


## Section 1: Selling CI/CD to your Team/Organization
### Explain the fundamentals and benefits of CI/CD to achieve, build, and deploy automation for cloud-based software products.
The CI/CD benefits proposal contains essential benefits of CI/CD, and describes the business context that will benefit from the automation tools. Explanation should include benefits that translate to revenue and cost for the business.



## Section 2: Deploying Working, Trustworthy Software
### Utilize Deployment Strategies to design and build CI/CD pipelines that support Continuous Delivery processes.

A public git repository with your project code. [URL01]
https://github.com/fghaiati/uda-fg-cicd.git

Evidence of code-based CI/CD configuration in the form of yaml files in your git repository.

VSC - windows
comment code multiple lines Ctrl+K Ctrl+C
uncomment Ctrl+K Ctrl+U 
commentented 
 - command section
 - steps from test to end of steps section
 - workflow keep only build front-end and build-backend

search for node image in https://circleci.com/docs/circleci-images (Convenience Images)
change image to cimg/node:13.8.0
build-frontend
code

build-backend
code

connect VSC with github to speed up pushes
build stage, build-frontend & build-backend code added

Console output of various pre-deploy job failure scenarios:

#######################################################################
Build Jobs that failed because of compile errors. [SCREENSHOT01]

ERROR:
> glee2@1.0.0 build /home/circleci/project/backend
> tsc

src/main.ts:31:21 - error TS1005: ',' expected.

31     .addBearerAuth()x // here is an intentional compile error. Remove the "x" and the backend should compile.
                       ~

FIX:
    .addBearerAuth() // here is an intentional compile error. Remove the "x" and the backend should compile.
                     // fixed by FGhaiati
[SCREENSHOT01-FIXED]

#######################################################################

#######################################################################
Unit-Test phase, added code

Failed unit tests. [SCREENSHOT02-backend-unit-test]
Failed unit tests. [SCREENSHOT02-frontend-unit-test]

ERROR:
Summary of all failing tests
 FAIL  src/modules/domain/employees/commands/handlers/employee-activator.handler.spec.ts
  ● Employee Remover › when a user activates an employee › should activate the employee from the repository

    expect(jest.fn()).toBeCalledWith(...expected)

    Expected: 100
    Received: 101

    Number of calls: 1

      33 | 
      34 |       // Assert
    > 35 |       expect(employeeRepository.findById).toBeCalledWith(100);
         |                                           ^
      36 |       expect(employeeRepository.save).toBeCalled();
      37 |     });
      38 |   });

      at src/modules/domain/employees/commands/handlers/employee-activator.handler.spec.ts:35:43
      at fulfilled (src/modules/domain/employees/commands/handlers/employee-activator.handler.spec.ts:5:58)

FIX:
    .addBearerAuth() // here is an intentional compile error. Remove the "x" and the backend should compile.
                     // fixed by FGhaiati


 FAIL  src/app/components/LoadingMessage/LoadingMessage.spec.tsx (10.616s)
  ● <LoadingMessage> › Props › message › Should render the props message

    expect(received).toBeTruthy()

    Received: false

       9 |         const message = 'Hello!';
      10 |         const wrapper = shallow(<LoadingMessage message={message} />);
    > 11 |         expect(wrapper.contains(<span>{message}?</span>)).toBeTruthy(); //remove the question mark to make the test pass
         |                                                           ^
      12 |       });
      13 |     });
      14 |   });

      at Object.<anonymous> (app/components/LoadingMessage/LoadingMessage.spec.tsx:11:59)



Fixes URLs:
https://github.com/udacity/cdond-c3-projectstarter/blob/7224513b309e3cf1a34497fdc8682ef4d50413d2/backend/src/modules/domain/employees/commands/handlers/employee-activator.handler.spec.ts#L22

https://github.com/udacity/cdond-c3-projectstarter/blob/7224513b309e3cf1a34497fdc8682ef4d50413d2/frontend/src/app/components/LoadingMessage/LoadingMessage.spec.tsx#L11

[SCREENSHOT02-FIXED]

#######################################################################


#######################################################################
Analyze phase, added code
cd frontend
npm install
npm audit --audit-level=critical

Failure because of vulnerable packages. [SCREENSHOT03]


npm audit fix --audit-level=critical --force
If the "npm audit fix" command above could not fix all critical vulnerabilities, try “npm audit fix --force” again
npm audit --audit-level=critical
[SCREENSHOT03-FIXED]

#######################################################################


#######################################################################
An alert from one of your failed builds. [SCREENSHOT04]
orbs:
  slack: circleci/slack@4.10.1

commands:

  notify_on_failure:
    steps:
    - slack/notify:
        event: fail
        template: basic_fail_1

Jobs:
  ........
  scan-backend:
    docker:
      - image: cimg/node:13.8.0
    steps:
      - .......
      - notify_on_failure


  notify_on_success:
    docker:
      - image: cimg/base:stable
    steps:
      - slack/notify:
          event: pass
          template: success_tagged_deployment_1

Workflow:
   .....
      - notify_on_success:
          requires: [scan-backend , scan-frontend, test-backend, test-frontend]

#######################################################################

Evidence in your code that:

Compile errors have been fixed.
Unit tests have been fixed.
All critical security vulnerabilities caught by the “Analyze” job have been fixed.




poweshell
cd util docker compose up
pgadmin connect to DB on port 5532

poweshell
node --version
13.8.0
cd backend
npm install
copy development.env .env
npm run migrations-win
created tables in glee database, schemas
employee, orders, product, order_products_product, migrations
npm start
http://localhost:3030/api/status
Ctrl+C
npm run build
create dist/set_env.bat
cd dist
.\set_env.bat
node main.js

poweshell
node --version
13.8.0
cd frontend
npm install
create development.env & .env  << API_URL=http://localhost:3030
npm start
http://localhost:3000
Ctrl+C
npm run build
export API_URL=http://localhost:3030
npm install -g serve
serve dist

# URL: https://github.com/github/gitignore  , template of Node.gitignore


## Section 3
### Utilize a configuration management tool to accomplish deployment to cloud-based servers.
Utilize a Configuration Management Tool to Accomplish Deployment to Cloud-Based Servers
In this section, you will practice creating and configuring infrastructure before deploying code to it. You will accomplish this by preparing your AWS and CircleCI accounts just a bit, then by building Ansible Playbooks for use in your CircleCI configuration.

Setup - AWS
1- Create and download a new key pair in AWS. Name this key pair "udacity" so that it works with your Cloud Formation templates. Look for "Option 1: Create a key pair using Amazon EC2" in this tutorial, if you need help. You'll be using this key pair (pem file) in future steps so keep it in a memorable location.

2- Create IAM user for programmatic access only and copy the access key id and secret access key. Refer to this tutorial, if you need help. Configure your AWS CLI to use the newly generated access keys. You'll also need these credentials to add to CircleCI configuration in the next steps.

uda-fg-cicd-runner-user_credentials

3- Add a PostgreSQL database in RDS that has public accessibility. This tutorial may help. As long as you marked "Public Accessibility" as "yes", you won't need to worry about VPC settings or security groups. Take note of the connection details, such as:

uda-pg-db
glee

Master username
postgres
Master password
DYmoZhF3yQ5wHPjQ3BGw


random.org
generate random string 
8ryxvugvip

create s3 bucket
name it udapeople-8ryxvugvip
bucket policy
{
    "Version": "2012-10-17",
    "Statement": [
        {
            "Sid": "PublicRead",
            "Effect": "Allow",
            "Principal": "*",
            "Action": [
                "s3:GetObject",
                "s3:GetObjectVersion"
            ],
            "Resource": "arn:aws:s3:::udapeople-8ryxvugvip/*"
        }
    ]
}

create profile udapeople
PS D:\aws\project.3\uda-fg-cicd\.aws> aws configure --profile udapeople
AWS Access Key ID [None]: AKIAYGAADITRKK4ZLZWN
AWS Secret Access Key [None]: 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
Default region name [None]: us-east-1 
Default output format [None]: json

check credentials are valid
PS D:\aws\project.3\uda-fg-cicd\.aws> aws sts get-caller-identity --profile udapeople
{
    "UserId": "AIDAYGAADITRMTX5G37S3",
    "Account": "562640930018",
    "Arn": "arn:aws:iam::562640930018:user/uda-fg-cicd-runner"
}

create cloudformation test through command line
cd .circleci/files
aws cloudformation deploy --template-file cloudfront.yml --stack-name InitialStack --parameter-overrides WorkflowID=udapeople-8ryxvugvip --profile udapeople

.circleci
add ssh key
environment variables

AWS Access Key ID [None]: AKIAYGAADITRKK4ZLZWN
AWS Secret Access Key [None]: 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
Default region name [None]: us-east-1 
Default output format [None]: json

```
AWS_ACCESS_KEY_ID=AKIAYGAADITRKK4ZLZWN <From the new user .csv>
AWS_SECRET_ACCESS_KEY=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 <From the new user .csv>
AWS_DEFAULT_REGION=us-east-1 # Or the region you are using for development

TYPEORM_CONNECTION=postgres
TYPEORM_MIGRATIONS_DIR=./src/migrations
TYPEORM_ENTITIES=./src/modules/domain/**/*.entity.ts
TYPEORM_MIGRATIONS=./src/migrations/*.ts

# From RDS Instance properties
TYPEORM_HOST=<RDS Instance Endpoint> # Without https in front
uda-pg-db.c0jx92rgz70c.us-east-1.rds.amazonaws.com
TYPEORM_PORT=5432
TYPEORM_USERNAME=postgres # Or the username you chose
TYPEORM_PASSWORD=<Auto generated> # Or the password you chose
DYmoZhF3yQ5wHPjQ3BGw
TYPEORM_DATABASE=<RDS Initial database name, Again NOT DB Instance Identifier>
glee
```

add command to install aws cli to ubuntu instance (cimg/, cimg/node:13.8.0)  ubuntu
https://docs.aws.amazon.com/cli/latest/userguide/getting-started-install.html

```
  install_awscli:
    description: install AWS CLI 2
    steps:
    - name: install AWS CLI 2
    - command: |
        curl "https://awscli.amazonaws.com/awscli-exe-linux-x86_64.zip" -o "awscliv2.zip"
        unzip awscliv2.zip
        sudo ./aws/install
```

installing ansible on ubuntu
https://docs.ansible.com/ansible/latest/installation_guide/installation_distros.html#installing-ansible-on-ubuntu

```
  install_ansible:
    description: install ansible v2 on ubuntu
    steps:
    - name: install ansible v2 on ubuntu
    - command: |
        sudo apt update
        sudo apt install software-properties-common
        sudo add-apt-repository --yes --update ppa:ansible/ansible
        sudo apt install ansible

```

++++++++++++++++++++++++++++++++++++++++++++++++++++++
### Deploy Infrastrcture Steps
Install AWS CLI
Ensure BE Infrastructure exit, using backend.yml template
Ensure FE Infrastructure exit, using frontend.yml template
Add IP address to ansible inventory
persist inventory file to workspace

backend.yml
- added instance name ami-070650c005cce4203
- add key name uda-fg-ssh-key
- added not existing type 
    Type: AWS::EC2::InstanceUbuntu #to raise error resource type not exist

Add rollbackcomand to use on failure (backend.yml)


Console output of appropriate failure for infrastructure creation job (using CloudFormation). [SCREENSHOT05]

Console output of a smoke test job that is failing appropriately. [SCREENSHOT06]

Console output of a successful rollback after a failed smoke test. [SCREENSHOT07]

Console output of successful promotion of new version to production in CloudFront. [SCREENSHOT08]

Console output of successful cleanup job that removes old S3 bucket and EC2 instance. [SCREENSHOT09]

Evidence that deploy jobs only happen on master branch. [SCREENSHOT10]

Evidence of deployed and functioning front-end application in an S3 bucket [URL02] and in CloudFront. [URL03]

Evidence of healthy back-end application. [URL04]

## Section 3: Turn Errors into Sirens
### Surface critical server errors for diagnosis using centralized logging.
Evidence of Prometheus Server. [URL05]

Evidence that Prometheus is monitoring memory, cpu and disk usage of EC2 instances. [SCREENSHOT11]

Evidence that Prometheus and AlertManager send alerts when certain conditions exist in the EC2 instance. [SCREENSHOT12]
