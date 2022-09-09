# Udacity Advanced DevOps Nanodegree 3rd PRoject
## Give Your Application Auto-Deploy Superpowers Project
 
By: Fathi Ghaiati
fathi.ghaiati@gmail.com
August 2022 / September 2022
About: This is my udacity Advanced DevOps Nanodegree CICD graduation project

### Objectives
This project, enabled me to prove my mastery of the following learning objectives:

- Explain the fundamentals and benefits of CI/CD to achieve, build, and deploy automation for cloud-based software products.
- Utilize Deployment Strategies to design and build CI/CD pipelines that support Continuous Delivery processes.
- Utilize a configuration management tool to accomplish deployment to cloud-based servers.
- Surface critical server errors for diagnosis using centralized structured logging.

![Diagram of CI/CD Pipeline we will be building.](udapeople.png)

### Guiding Instructions 
- starter project: [URL](https://github.com/udacity/cdond-c3-projectstarter)

* [Selling CI/CD](instructions/0-selling-cicd.md)
* [Getting Started](instructions/1-getting-started.md)
* [Deploying Working, Trustworthy Software](instructions/2-deploying-trustworthy-code.md)
* [Configuration Management](instructions/3-configuration-management.md)
* [Turn Errors into Sirens](instructions/4-turn-errors-into-sirens.md)

### Project Submission

For your submission, please submit the following:

- A text file named `urls.txt` including:
  1. Public Url to GitHub repository (not private) [URL01]
  1. Public URL for your S3 Bucket (aka, your green candidate front-end) [URL02]
  1. Public URL for your CloudFront distribution (aka, your blue production front-end) [URL03]
  1. Public URLs to deployed application back-end in EC2 [URL04]
  1. Public URL to your Prometheus Server [URL05]

- Below are screenshots in PNG format, named using the screenshot number listed in the instructions. The screenshots are included in the screenshots/* folder

  1. Job failed because of compile errors. [SCREENSHOT01]
  ![Job failed because of compile errors](screenshots/SCREENSHOT01.png)
  ![Job failed because of compile errors - fixed](screenshots/SCREENSHOT01-FIXED.png)
  
  2. Job failed because of unit tests. [SCREENSHOT02]
  ![Job failed because of unit tests - backend](screenshots/SCREENSHOT02-backend-unit-test.png)
  ![Job failed because of unit tests - frontend](screenshots/SCREENSHOT02-frontend-unit-test.png)
  ![Job failed because of unit tests - fixed](screenshots/SCREENSHOT02-FIXED.png)
  
  3. Job failed because of vulnerable packages. [SCREENSHOT03]
  ![Job failed because of vulnerable packages](screenshots/SCREENSHOT03.png)


  1. An alert from one of your failed builds. [SCREENSHOT04]
  1. Appropriate job failure for infrastructure creation. [SCREENSHOT05]
  1. Appropriate job failure for the smoke test job. [SCREENSHOT06]
  1. Successful rollback after a failed smoke test. [SCREENSHOT07]  
  1. Successful promotion job. [SCREENSHOT08]
  1. Successful cleanup job. [SCREENSHOT09]
  1. Only deploy on pushed to `master` branch. [SCREENSHOT10]
  1. Provide a screenshot of a graph of your EC2 instance including available memory, available disk space, and CPU usage. [SCREENSHOT11]
  1. Provide a screenshot of an alert that was sent by Prometheus. [SCREENSHOT12]

- Your presentation should be in PDF format named "presentation.pdf" and should be included in your code repository root folder. 

### Built With

- [Circle CI](www.circleci.com) - Cloud-based CI/CD service
- [Amazon AWS](https://aws.amazon.com/) - Cloud services
- [AWS CLI](https://aws.amazon.com/cli/) - Command-line tool for AWS
- [CloudFormation](https://aws.amazon.com/cloudformation/) - Infrastrcuture as code
- [Ansible](https://www.ansible.com/) - Configuration management tool
- [Prometheus](https://prometheus.io/) - Monitoring tool

### License

[License](LICENSE.md)
