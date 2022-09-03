# Fathi Ghaiati
# This is my udacity CICD project 

## started by simple project with .circleci config.yml 
## pushed to github
## created circleci project linked to this project
## circle ci run successfully 

## udacity starter project
## https://github.com/udacity/cdond-c3-projectstarter
## copied folders from starter project: .circleci, frontend, backend & util
 
git add .
git commit -m "copy code from udacity starter project, the following folders: .circleci, frontend, backend & util"
git push -u origin master 

## created screenshots folder for required screenshots


## Give Your Application Auto-Deploy Superpowers Requirements (PROJECT SPECIFICATION)
### Section 1: Selling CI/CD to your Team/Organization
#### Explain the fundamentals and benefits of CI/CD to achieve, build, and deploy automation for cloud-based software products.
The CI/CD benefits proposal contains essential benefits of CI/CD, and describes the business context that will benefit from the automation tools. Explanation should include benefits that translate to revenue and cost for the business.



### Section 2: Deploying Working, Trustworthy Software
#### Utilize Deployment Strategies to design and build CI/CD pipelines that support Continuous Delivery processes.

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
# If the "npm audit fix" command above could not fix all critical vulnerabilities, try “npm audit fix --force” again
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












#### Utilize a configuration management tool to accomplish deployment to cloud-based servers.
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
