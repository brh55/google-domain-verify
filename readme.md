# google-domain-verify

> A temporary way to quickly allow a web hook url for your application using Google web hook offerings

This is a barebones, no frill server that's sole purpose is to verify domains and subdomain urls within the [Google Webmaster Central](https://www.google.com/webmasters/verification/verification). The primary use case of this package is to verify subdomain urls such as `your-sub-domain.ngrok.io` to allow a developer to work locally agianst webhook services against their own proxy tunnels.


## Usage
1. Go to [Google Webmaster Domain Verification](https://www.google.com/webmasters/verification/home?hl=en&authuser=1)
2. Download the generated verification html file *(ie: google9d22a3befe5ed022.html)*
3. Move the verification html file to the `/html` subdirectory
4. Run `npm start`
5. Continue with the domain verification, and you should be set

### Ngrok Usage
[Ngrok](http://ngrok.io) subdomains can easily be verified with one additional step.
1. Run `ngrok http -subdomain=YOURSUBDOMAINHERE 5000` *(assuming the port is the same, otherwise replace with correct port)*

### Heroku Usage
You may want to use heroku as a service for your webhook services, but don't want to necessarily register a domain.

From a initial state:

1. Clone/Fork Repo
2. Run `heroku create APPNAME`
3. Follow usage steps

If you currently have an existing heroku instance running and want to use that subdomain to verify it's url with Google, this can be done with a bit of force pushes. This can be accomplished with a bit of Git wizardary, but make sure to ensure to have the matching heroku commits into your own local branch.

1. Clone repo, and add the heroku remote to your Git remotes
    `git remote add heroku https://git.heroku.com/YOUR-APP.git`
2. Push branch to your heroku remote
    `git push heroku master`  (a `--force` flag maybe needed)
3. Continue with usage steps
4. Return to initial project repository and push the latest branch into heroku after it has been verified.
    `git push heroku YOURLOCALBRANCH:master`
