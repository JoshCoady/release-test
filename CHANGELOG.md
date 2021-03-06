## [0.6.2](https://github.com/JoshCoady/release-test/compare/v0.6.1...v0.6.2) (2020-10-16)


### Bug Fixes

* needed more work ([992f0b8](https://github.com/JoshCoady/release-test/commit/992f0b8eebfb84930ca57234878d56e1fbcc8550))

## [0.6.1](https://github.com/JoshCoady/release-test/compare/v0.6.0...v0.6.1) (2020-10-16)


### Bug Fixes

* got to get this big prob fixed ([bfec899](https://github.com/JoshCoady/release-test/commit/bfec8990c9eb36fbf0e8b951153b21d03c04eeb3))

# [0.6.0](https://github.com/JoshCoady/release-test/compare/v0.5.0...v0.6.0) (2020-10-16)


### Bug Fixes

* another test ([b749e45](https://github.com/JoshCoady/release-test/commit/b749e45e2a7aacd88879776a12cdc63acfa9b81c))
* another try at the compare url ([917e376](https://github.com/JoshCoady/release-test/commit/917e376000975076b0685058f4c27a6ba56b1f3b))
* cant find `EOF` ([40b5cef](https://github.com/JoshCoady/release-test/commit/40b5cef330f07015bf22802442aef4ce71f2eda6))
* correct base repo URL ([baffb64](https://github.com/JoshCoady/release-test/commit/baffb641ec93dd617f010d09f13abcb111f30830))
* fix var expansion ([9b3fc51](https://github.com/JoshCoady/release-test/commit/9b3fc517be4e60b91114c9fea5142e1a9a2ad994))
* just some cleanup ([d8071f4](https://github.com/JoshCoady/release-test/commit/d8071f40aae59efbaa4d716abf6955de3734aca0))


### Features

* diff output for dev ([da9fe28](https://github.com/JoshCoady/release-test/commit/da9fe28a0024dc68efafe968517a4ef7d7a3eef3))
* reduce dev output further ([4ca921e](https://github.com/JoshCoady/release-test/commit/4ca921e420f719f9f7fc2b6df8c979e0f81c3a99))
* reorg and fix a prob ([d29ab51](https://github.com/JoshCoady/release-test/commit/d29ab513011614c98f5800ef904142d97d55105a))

# [0.5.0](https://github.com/JoshCoady/release-test/compare/v0.4.0...v0.5.0) (2020-10-16)


### Bug Fixes

* add correct brnachs ([9e77d9f](https://github.com/JoshCoady/release-test/commit/9e77d9f335e94a86b251c7f7b1596f0ef2911304))
* correct for new bran h smaes ([a431f03](https://github.com/JoshCoady/release-test/commit/a431f0335ef48e285e80a3e5114c90e133b8937d))
* correct url extraction ([342f438](https://github.com/JoshCoady/release-test/commit/342f438e7c7c7a66fb628720c2393ca4e7136baa))
* dry run sandbox mode ([57f67fb](https://github.com/JoshCoady/release-test/commit/57f67fba08d96db4183b5e6ff04c265da02e1339))
* remove tests ([1297f64](https://github.com/JoshCoady/release-test/commit/1297f64fb6cc5da2e31a3813fba7f1fdcc5f222b))
* test out sandbox ([f4ff889](https://github.com/JoshCoady/release-test/commit/f4ff8893a2f08491b812c762a7a5001476bdaffc))


### Features

* improve slack messaging ([87c44e2](https://github.com/JoshCoady/release-test/commit/87c44e29088e118c8b291d457b66bf84319f0e48))

# [0.4.0](https://github.com/JoshCoady/release-test/compare/v0.3.0...v0.4.0) (2020-10-15)


### Bug Fixes

* add plugin config -- Let’s start with Aurora. Aurora is Amazon’s “MySQL and PostgreSQL compatible relational database built for the cloud, that combines the performance and availability of high-end commercial databases with the simplicity and cost-effectiveness of open source databases.” If you are using MySQL or PostgreSQL, you can basically migrate to Aurora without any changes to your application code. It’s fully-managed, ridiculously fast (up to 5x faster than MySQL), and can scale using shared-storage read replicas and multi availability zone deployments. This extra power (and convenience) comes with an added cost (~23% more per hour), but I’ve found it to be well worth it. ([bc5ecd5](https://github.com/JoshCoady/release-test/commit/bc5ecd53c875ed073d5f6dafcc001a9f4a37e7fd))
* better EOF ([f332482](https://github.com/JoshCoady/release-test/commit/f332482bf822091b0605792be52f05b5f17f0205))
* block syntax ([543d453](https://github.com/JoshCoady/release-test/commit/543d4530af50a6c45c1d3b10fa70bf8fe13c7088))
* bool checks -- How do atomic design and interface inventory belong to each other? First let’s define what one of the biggest problems in product development is: the lack of design consistency. By creating a common language for the product development team, you can utilize the atomic design methodology to prevent inconsistencies. This common language is called your interface inventory. You can imagine it as a neatly organized box with all the pieces of your product. ([342195c](https://github.com/JoshCoady/release-test/commit/342195c65f9a1f80b7ab832514d0e76815302a47))
* by adding a space ([d574ac9](https://github.com/JoshCoady/release-test/commit/d574ac96339e6d9027951ff86eb297e425c5e7fb))
* by removing a space ([98732bd](https://github.com/JoshCoady/release-test/commit/98732bd87b07c4fb79eec3c0bb5e8e76a06ee47b))
* correct bool check format -- ACUs are billed by the second at a flat rate of $0.06 per hour. Even though you are only billed per second of usage, there is a minimum of 5 minutes billed each time the database is active. There is also a minimum provisioning of 2 ACUs (with 4 GB of memory).  Updated May 2, 2019: You can now set your minimum capacity to 1 ACU (with 2 GB of memory) if you are using the MySQL version. PostgreSQL still has a minimum of 2 ACUs. You can scale all the way up to 256 ACUs with approximately 488 GB of memory. If you were to keep an Aurora Serverless database running 24 hours per day at 2 ACUs, it would cost you $2.88 ($0.06 * 2 * 24) per day (or roughly $86 per month). If you scale down to 1 ACU (on MySQL), the base cost (without and scale ups) would be about $43 per month. ([2506e9e](https://github.com/JoshCoady/release-test/commit/2506e9eeca1f448a8af5475b3dfd108f5b81422d))
* correct dependency resolution - Hornswaggle snow bilge Barbary Coast pinnace Corsair gaff shrouds bring a spring upon her cable killick knave keelhaul lee fathom to go on account belay cog. Pinnace swing the lead clipper crack Jennys tea cup yawl run a shot across the bow bucko gun walk the plank American Main red ensign belaying pin Jack Tar coxswain heave down take a caulk bring a spring upon her cable. Scuttle knave Davy Jones' Locker belay cackle fruit barkadeer ho tackle boom sutler fluke provost gun plunder warp nipper Corsair. Walk the plank run a rig bilge Nelsons folly hardtack bucko Admiral of the Black pillage Privateer crow's nest furl grapple chase guns square-rigged Arr scuttle case shot. Barbary Coast hearties trysail landlubber or just lubber warp run a rig run a shot across the bow gally quarterdeck tender gangway overhaul boatswain clipper grapple fire ship salmagundi. Bucko long boat heave down dead men tell no tales case shot Barbary Coast mutiny snow spyglass cackle fruit boatswain black jack pinnace rutters gangway scuppers Jolly Roger. Cable chase guns walk the plank sheet code of conduct gun killick swab heave to lateen sail spike stern tackle scallywag wench gabion rum. Interloper hands knave scallywag Corsair broadside quarterdeck doubloon plunder Letter of Marque parrel furl mizzen code of conduct landlubber or just lubber strike colors bring a spring upon her cable. Corsair spyglass avast Nelsons folly hogshead belay swing the lead cable smartly Yellow Jack spanker parrel fathom topsail transom careen maroon. Pink Cat o'nine tails bowsprit topgallant Privateer hulk starboard gabion broadside cackle fruit spanker lugger walk the plank Jack Tar Barbary Coast hornswaggle squiffy. Pirate lee gunwalls cable booty lugsail parley strike colors black spot Nelsons folly port clipper run a rig bilge rat Sail ho barkadeer yo-ho-ho. Buccaneer pillage lugsail ahoy rum run a shot across the bow loaded to the gunwalls hail-shot long boat line knave draft scuttle league Cat o'nine tails clap of thunder ballast. ([2db1a49](https://github.com/JoshCoady/release-test/commit/2db1a49169b8ec541fac10ac3bcc5a919d869869))
* dont mneed to escape the brackets ([1b4540e](https://github.com/JoshCoady/release-test/commit/1b4540ecdc15ca7cae34ab9d7444c1b054b3e548))
* double echo ([fc08bcb](https://github.com/JoshCoady/release-test/commit/fc08bcb68ba21ae1ea5cfa97f38c49ba88ffe1d9))
* make sure `EOF` is on own line ([21c8068](https://github.com/JoshCoady/release-test/commit/21c8068885e878b9456eba0e3376447cd7b3f163))
* missing file ouytput ([123d919](https://github.com/JoshCoady/release-test/commit/123d9191d3cae9ec2b18dc9d211fd43c39d0bb09))
* need double escape ([bdff6a2](https://github.com/JoshCoady/release-test/commit/bdff6a2d53eb842435809431ff5cb538b4ba514e))
* need to edit in place ([1b110f2](https://github.com/JoshCoady/release-test/commit/1b110f2c4cce8c4686cfda16567b7d3fca8c90f3))
* need to remove `done` that was left in ([3f3e775](https://github.com/JoshCoady/release-test/commit/3f3e775f32aadc49215e30a921f5428de2f8a427))
* output multiline ([753f767](https://github.com/JoshCoady/release-test/commit/753f76705a72dd5f2387a229512bcfeff5c5a4fb))
* output multiline with env ([74dbed9](https://github.com/JoshCoady/release-test/commit/74dbed9c2e7c4e138cd1fd6beeb97d5fc86e45f3))
* output the contents not the path ([9f298c7](https://github.com/JoshCoady/release-test/commit/9f298c753d315ff6f6d96f3a0ae62b29aaf9c7ac))
* prevent bad output ([8b239d0](https://github.com/JoshCoady/release-test/commit/8b239d05803a33deb3e9e2951837f27101a5ea12))
* try double escaping ([718296f](https://github.com/JoshCoady/release-test/commit/718296f3a61ff708818e2c0ddff8fb0043bbe2bc))
* try looping ([ab58dc3](https://github.com/JoshCoady/release-test/commit/ab58dc3d85861abdb4be1ea70666f4eebd2ff6a2))


### Features

* add debug output ([a16f57b](https://github.com/JoshCoady/release-test/commit/a16f57b40fce8f3a085e0c85fedee01da47f0eae))
* another cool change ([7089b23](https://github.com/JoshCoady/release-test/commit/7089b23eb02aac116939cc1b00083201824e2cd0))
* better blocks ([9f1ef61](https://github.com/JoshCoady/release-test/commit/9f1ef61b389d3b3e237f531ddc975999766bb48c))
* better overage detection ([ba8ea29](https://github.com/JoshCoady/release-test/commit/ba8ea29e1fb8992106f91b6eb1edece083abd1f0))
* blocks output test ([bfcd5df](https://github.com/JoshCoady/release-test/commit/bfcd5df850b892d251ac5ae6e872025658dad252))
* deal with extra comma ([ed69a2d](https://github.com/JoshCoady/release-test/commit/ed69a2da0f32a70b0a229d91a39ea05527d02ff8))
* deploy to prod on release create ([6a99392](https://github.com/JoshCoady/release-test/commit/6a9939231a0e8c4dde3d99368aed1d6b35020f4c))
* expand branches config -- A job contains a sequence of tasks called steps. Steps can run commands, run setup tasks, or run an action in your repository, a public repository, or an action published in a Docker registry. Not all steps run actions, but all actions run as a step. Each step runs in its own process in the runner environment and has access to the workspace and filesystem. Because steps run in their own process, changes to environment variables are not preserved between steps. GitHub provides built-in steps to set up and complete a job. ([f86613b](https://github.com/JoshCoady/release-test/commit/f86613bbb9417d1505374c90da1539996e5439c1))
* improve output? ([615847a](https://github.com/JoshCoady/release-test/commit/615847a3dd2f3b34dff3afe814d5038203f5b539))
* make changelog master only ([363186e](https://github.com/JoshCoady/release-test/commit/363186ed5a338bca4eb46ff6bf45f563efe7dcc9))
* more readable ([2d66c99](https://github.com/JoshCoady/release-test/commit/2d66c99d22683240672a7cfd5c6ab72578ea122d))
* output config -- So how is it different from an interface inventory? An interface inventory is showcasing the status quo and the different phases in a product’s life. In comparison, a design system keeps on evolving and acts as the single source of truth to return to for each product team member. Its fundamental purpose is to facilitate the work from all teams involved which reaches from the design team to the development team, etc. ([f76b0d9](https://github.com/JoshCoady/release-test/commit/f76b0d9603a9080a6abd9e1aeaad39486fec52d0))
* output env for debug ([7d205b1](https://github.com/JoshCoady/release-test/commit/7d205b1ba71b8913b39788f488b419089a0cecaa))
* release target based on branch -- When more than one environment variable is defined with the same name, GitHub uses the most specific environment variable. For example, an environment variable defined in a step will override job and workflow variables with the same name, while the step executes. A variable defined for a job will override a workflow variable with the same name, while the job executes. ([aac4101](https://github.com/JoshCoady/release-test/commit/aac4101b5c8176060b1c66b0b43b3cdda5c3c4b2))
* remove comments ([4b4210e](https://github.com/JoshCoady/release-test/commit/4b4210ef56d99abbc54b9941964a8585e7e96570))
* simplify block output ([362ffd5](https://github.com/JoshCoady/release-test/commit/362ffd51f3144fc2d23dccf6d03b8637f570731a))
* test if issue -- TriNet is the single employer sponsor of all its benefit plans. TriNet makes these plans available to qualifying worksite employees (WSEs), with whom TriNet has established an employment relationship, and who perform services for customers of TriNet in a Professional Employer Organization (PEO) service model. Please refer to the TriNet Benefits Guidebook for further details regarding benefits eligibility. It is very important that you waive or elect those benefits that best suit the needs of your family. If you already have medical coverage, you may choose to waive TriNet medical benefits. If you choose to waive medical coverage, you will still be able to enroll in optional plans and flexible spending accounts. ([75513a2](https://github.com/JoshCoady/release-test/commit/75513a26d95ec9d374e4581f1164ef5acbb4a8fc))
* testing multiple if ([a4e8ea6](https://github.com/JoshCoady/release-test/commit/a4e8ea63f1cb1118c7156ff8e24074d0191fe65f))
* tweak text ([cdfbb49](https://github.com/JoshCoady/release-test/commit/cdfbb499a6d7f7d0b22d1bf5a220be4117fc7934))

# [0.4.0-dev.15](https://github.com/JoshCoady/release-test/compare/v0.4.0-dev.14...v0.4.0-dev.15) (2020-10-15)


### Features

* simplify block output ([362ffd5](https://github.com/JoshCoady/release-test/commit/362ffd51f3144fc2d23dccf6d03b8637f570731a))

# [0.4.0-dev.14](https://github.com/JoshCoady/release-test/compare/v0.4.0-dev.13...v0.4.0-dev.14) (2020-10-15)


### Bug Fixes

* missing file ouytput ([123d919](https://github.com/JoshCoady/release-test/commit/123d9191d3cae9ec2b18dc9d211fd43c39d0bb09))

# [0.4.0-dev.13](https://github.com/JoshCoady/release-test/compare/v0.4.0-dev.12...v0.4.0-dev.13) (2020-10-15)


### Bug Fixes

* output the contents not the path ([9f298c7](https://github.com/JoshCoady/release-test/commit/9f298c753d315ff6f6d96f3a0ae62b29aaf9c7ac))

# [0.4.0-dev.12](https://github.com/JoshCoady/release-test/compare/v0.4.0-dev.11...v0.4.0-dev.12) (2020-10-15)


### Features

* add debug output ([a16f57b](https://github.com/JoshCoady/release-test/commit/a16f57b40fce8f3a085e0c85fedee01da47f0eae))

# [0.4.0-dev.11](https://github.com/JoshCoady/release-test/compare/v0.4.0-dev.10...v0.4.0-dev.11) (2020-10-15)


### Bug Fixes

* try looping ([ab58dc3](https://github.com/JoshCoady/release-test/commit/ab58dc3d85861abdb4be1ea70666f4eebd2ff6a2))

# [0.4.0-dev.10](https://github.com/JoshCoady/release-test/compare/v0.4.0-dev.9...v0.4.0-dev.10) (2020-10-15)


### Bug Fixes

* better EOF ([f332482](https://github.com/JoshCoady/release-test/commit/f332482bf822091b0605792be52f05b5f17f0205))

# [0.4.0-dev.9](https://github.com/JoshCoady/release-test/compare/v0.4.0-dev.8...v0.4.0-dev.9) (2020-10-15)


### Bug Fixes

* by adding a space ([d574ac9](https://github.com/JoshCoady/release-test/commit/d574ac96339e6d9027951ff86eb297e425c5e7fb))
* by removing a space ([98732bd](https://github.com/JoshCoady/release-test/commit/98732bd87b07c4fb79eec3c0bb5e8e76a06ee47b))


### Features

* more readable ([2d66c99](https://github.com/JoshCoady/release-test/commit/2d66c99d22683240672a7cfd5c6ab72578ea122d))

# [0.4.0-dev.9](https://github.com/JoshCoady/release-test/compare/v0.4.0-dev.8...v0.4.0-dev.9) (2020-10-15)


### Bug Fixes

* by adding a space ([d574ac9](https://github.com/JoshCoady/release-test/commit/d574ac96339e6d9027951ff86eb297e425c5e7fb))


### Features

* more readable ([2d66c99](https://github.com/JoshCoady/release-test/commit/2d66c99d22683240672a7cfd5c6ab72578ea122d))

# [0.4.0-dev.9](https://github.com/JoshCoady/release-test/compare/v0.4.0-dev.8...v0.4.0-dev.9) (2020-10-15)


### Features

* more readable ([2d66c99](https://github.com/JoshCoady/release-test/commit/2d66c99d22683240672a7cfd5c6ab72578ea122d))

# [0.4.0-dev.8](https://github.com/JoshCoady/release-test/compare/v0.4.0-dev.7...v0.4.0-dev.8) (2020-10-15)


### Features

* improve output? ([615847a](https://github.com/JoshCoady/release-test/commit/615847a3dd2f3b34dff3afe814d5038203f5b539))

# [0.4.0-dev.7](https://github.com/JoshCoady/release-test/compare/v0.4.0-dev.6...v0.4.0-dev.7) (2020-10-15)


### Bug Fixes

* dont mneed to escape the brackets ([1b4540e](https://github.com/JoshCoady/release-test/commit/1b4540ecdc15ca7cae34ab9d7444c1b054b3e548))

# [0.4.0-dev.6](https://github.com/JoshCoady/release-test/compare/v0.4.0-dev.5...v0.4.0-dev.6) (2020-10-15)


### Bug Fixes

* try double escaping ([718296f](https://github.com/JoshCoady/release-test/commit/718296f3a61ff708818e2c0ddff8fb0043bbe2bc))

# [0.4.0-dev.5](https://github.com/JoshCoady/release-test/compare/v0.4.0-dev.4...v0.4.0-dev.5) (2020-10-15)


### Bug Fixes

* output multiline ([753f767](https://github.com/JoshCoady/release-test/commit/753f76705a72dd5f2387a229512bcfeff5c5a4fb))
* output multiline with env ([74dbed9](https://github.com/JoshCoady/release-test/commit/74dbed9c2e7c4e138cd1fd6beeb97d5fc86e45f3))

# [0.4.0-dev.4](https://github.com/JoshCoady/release-test/compare/v0.4.0-dev.3...v0.4.0-dev.4) (2020-10-15)


### Bug Fixes

* block syntax ([543d453](https://github.com/JoshCoady/release-test/commit/543d4530af50a6c45c1d3b10fa70bf8fe13c7088))

# [0.4.0-dev.3](https://github.com/JoshCoady/release-test/compare/v0.4.0-dev.2...v0.4.0-dev.3) (2020-10-15)


### Features

* blocks output test ([bfcd5df](https://github.com/JoshCoady/release-test/commit/bfcd5df850b892d251ac5ae6e872025658dad252))

# [0.4.0-dev.2](https://github.com/JoshCoady/release-test/compare/v0.4.0-dev.1...v0.4.0-dev.2) (2020-10-15)


### Features

* better blocks ([9f1ef61](https://github.com/JoshCoady/release-test/commit/9f1ef61b389d3b3e237f531ddc975999766bb48c))

# [0.4.0-dev.1](https://github.com/JoshCoady/release-test/compare/v0.3.0...v0.4.0-dev.1) (2020-10-15)


### Bug Fixes

* add plugin config -- Let’s start with Aurora. Aurora is Amazon’s “MySQL and PostgreSQL compatible relational database built for the cloud, that combines the performance and availability of high-end commercial databases with the simplicity and cost-effectiveness of open source databases.” If you are using MySQL or PostgreSQL, you can basically migrate to Aurora without any changes to your application code. It’s fully-managed, ridiculously fast (up to 5x faster than MySQL), and can scale using shared-storage read replicas and multi availability zone deployments. This extra power (and convenience) comes with an added cost (~23% more per hour), but I’ve found it to be well worth it. ([bc5ecd5](https://github.com/JoshCoady/release-test/commit/bc5ecd53c875ed073d5f6dafcc001a9f4a37e7fd))
* bool checks -- How do atomic design and interface inventory belong to each other? First let’s define what one of the biggest problems in product development is: the lack of design consistency. By creating a common language for the product development team, you can utilize the atomic design methodology to prevent inconsistencies. This common language is called your interface inventory. You can imagine it as a neatly organized box with all the pieces of your product. ([342195c](https://github.com/JoshCoady/release-test/commit/342195c65f9a1f80b7ab832514d0e76815302a47))
* correct bool check format -- ACUs are billed by the second at a flat rate of $0.06 per hour. Even though you are only billed per second of usage, there is a minimum of 5 minutes billed each time the database is active. There is also a minimum provisioning of 2 ACUs (with 4 GB of memory).  Updated May 2, 2019: You can now set your minimum capacity to 1 ACU (with 2 GB of memory) if you are using the MySQL version. PostgreSQL still has a minimum of 2 ACUs. You can scale all the way up to 256 ACUs with approximately 488 GB of memory. If you were to keep an Aurora Serverless database running 24 hours per day at 2 ACUs, it would cost you $2.88 ($0.06 * 2 * 24) per day (or roughly $86 per month). If you scale down to 1 ACU (on MySQL), the base cost (without and scale ups) would be about $43 per month. ([2506e9e](https://github.com/JoshCoady/release-test/commit/2506e9eeca1f448a8af5475b3dfd108f5b81422d))
* correct dependency resolution - Hornswaggle snow bilge Barbary Coast pinnace Corsair gaff shrouds bring a spring upon her cable killick knave keelhaul lee fathom to go on account belay cog. Pinnace swing the lead clipper crack Jennys tea cup yawl run a shot across the bow bucko gun walk the plank American Main red ensign belaying pin Jack Tar coxswain heave down take a caulk bring a spring upon her cable. Scuttle knave Davy Jones' Locker belay cackle fruit barkadeer ho tackle boom sutler fluke provost gun plunder warp nipper Corsair. Walk the plank run a rig bilge Nelsons folly hardtack bucko Admiral of the Black pillage Privateer crow's nest furl grapple chase guns square-rigged Arr scuttle case shot. Barbary Coast hearties trysail landlubber or just lubber warp run a rig run a shot across the bow gally quarterdeck tender gangway overhaul boatswain clipper grapple fire ship salmagundi. Bucko long boat heave down dead men tell no tales case shot Barbary Coast mutiny snow spyglass cackle fruit boatswain black jack pinnace rutters gangway scuppers Jolly Roger. Cable chase guns walk the plank sheet code of conduct gun killick swab heave to lateen sail spike stern tackle scallywag wench gabion rum. Interloper hands knave scallywag Corsair broadside quarterdeck doubloon plunder Letter of Marque parrel furl mizzen code of conduct landlubber or just lubber strike colors bring a spring upon her cable. Corsair spyglass avast Nelsons folly hogshead belay swing the lead cable smartly Yellow Jack spanker parrel fathom topsail transom careen maroon. Pink Cat o'nine tails bowsprit topgallant Privateer hulk starboard gabion broadside cackle fruit spanker lugger walk the plank Jack Tar Barbary Coast hornswaggle squiffy. Pirate lee gunwalls cable booty lugsail parley strike colors black spot Nelsons folly port clipper run a rig bilge rat Sail ho barkadeer yo-ho-ho. Buccaneer pillage lugsail ahoy rum run a shot across the bow loaded to the gunwalls hail-shot long boat line knave draft scuttle league Cat o'nine tails clap of thunder ballast. ([2db1a49](https://github.com/JoshCoady/release-test/commit/2db1a49169b8ec541fac10ac3bcc5a919d869869))
* prevent bad output ([8b239d0](https://github.com/JoshCoady/release-test/commit/8b239d05803a33deb3e9e2951837f27101a5ea12))


### Features

* deploy to prod on release create ([6a99392](https://github.com/JoshCoady/release-test/commit/6a9939231a0e8c4dde3d99368aed1d6b35020f4c))
* expand branches config -- A job contains a sequence of tasks called steps. Steps can run commands, run setup tasks, or run an action in your repository, a public repository, or an action published in a Docker registry. Not all steps run actions, but all actions run as a step. Each step runs in its own process in the runner environment and has access to the workspace and filesystem. Because steps run in their own process, changes to environment variables are not preserved between steps. GitHub provides built-in steps to set up and complete a job. ([f86613b](https://github.com/JoshCoady/release-test/commit/f86613bbb9417d1505374c90da1539996e5439c1))
* output config -- So how is it different from an interface inventory? An interface inventory is showcasing the status quo and the different phases in a product’s life. In comparison, a design system keeps on evolving and acts as the single source of truth to return to for each product team member. Its fundamental purpose is to facilitate the work from all teams involved which reaches from the design team to the development team, etc. ([f76b0d9](https://github.com/JoshCoady/release-test/commit/f76b0d9603a9080a6abd9e1aeaad39486fec52d0))
* release target based on branch -- When more than one environment variable is defined with the same name, GitHub uses the most specific environment variable. For example, an environment variable defined in a step will override job and workflow variables with the same name, while the step executes. A variable defined for a job will override a workflow variable with the same name, while the job executes. ([aac4101](https://github.com/JoshCoady/release-test/commit/aac4101b5c8176060b1c66b0b43b3cdda5c3c4b2))
* test if issue -- TriNet is the single employer sponsor of all its benefit plans. TriNet makes these plans available to qualifying worksite employees (WSEs), with whom TriNet has established an employment relationship, and who perform services for customers of TriNet in a Professional Employer Organization (PEO) service model. Please refer to the TriNet Benefits Guidebook for further details regarding benefits eligibility. It is very important that you waive or elect those benefits that best suit the needs of your family. If you already have medical coverage, you may choose to waive TriNet medical benefits. If you choose to waive medical coverage, you will still be able to enroll in optional plans and flexible spending accounts. ([75513a2](https://github.com/JoshCoady/release-test/commit/75513a26d95ec9d374e4581f1164ef5acbb4a8fc))
* testing multiple if ([a4e8ea6](https://github.com/JoshCoady/release-test/commit/a4e8ea63f1cb1118c7156ff8e24074d0191fe65f))

# [1.0.0-beta.3](https://github.com/JoshCoady/release-test/compare/v1.0.0-beta.2...v1.0.0-beta.3) (2020-06-13)


### Features

* add default/simple message to slack ([193d31b](https://github.com/JoshCoady/release-test/commit/193d31b9f74577e48d9523d61e06eef19cc40352))

## [1.0.1](https://github.com/JoshCoady/release-test/compare/v1.0.0...v1.0.1) (2020-06-13)


### Bug Fixes

* merge before push ([76e1a3f](https://github.com/JoshCoady/release-test/commit/76e1a3f3778eb9450f3b817238bbd0c2d52069b0))

# 1.0.0 (2020-06-13)


### Bug Fixes

* add `--force` flag to overwrite existing tag ([5d61b0c](https://github.com/JoshCoady/release-test/commit/5d61b0ca2c73541538091204f8f96fae1edd6f0f))
* build steps processing release run even if no release ([d58d447](https://github.com/JoshCoady/release-test/commit/d58d447047436a5ee98f468547452c0ad667ca80))
* need to include node_modules ([268c7cd](https://github.com/JoshCoady/release-test/commit/268c7cd42135fce52d05441d6888d4290fafd445))
* only push on prod release ([b6087c7](https://github.com/JoshCoady/release-test/commit/b6087c77ba84bf11ccb55abf45df5a90491b95b6))
* remove npm build set ([50b0317](https://github.com/JoshCoady/release-test/commit/50b0317103582c5e2ed73d7a381744c526d11a4f))
* script needs to be executable ([f036989](https://github.com/JoshCoady/release-test/commit/f0369895eacae31c41969b2964764b190120d931))
* slack action version number ([8ce35e9](https://github.com/JoshCoady/release-test/commit/8ce35e94a3d620f016ef0bf3fb74983051b6d768))
* test script ([9cb77a9](https://github.com/JoshCoady/release-test/commit/9cb77a9b530819990ee70406ca5c1bc1587777ef))
* try my member id ([4b53773](https://github.com/JoshCoady/release-test/commit/4b537732ffe6a4fb8a9ab30b2150237d99b662ed))


### Features

* add changelog updating ([6fdc64a](https://github.com/JoshCoady/release-test/commit/6fdc64a9fc123e599f08ee6fcb2bc4fd3a3594ab))
* add semantic release config and related files ([4a6f35c](https://github.com/JoshCoady/release-test/commit/4a6f35c76f14c8d279c4ffc0ef19a09f846828f5))
* add test message ([ec042aa](https://github.com/JoshCoady/release-test/commit/ec042aaa88bfa3ce8f20b853a906b9d35bc6978e))
* auto-tag major ([1231571](https://github.com/JoshCoady/release-test/commit/123157136818aa86a4203b09c4aa87e3b199bc91))
* change release message ([a939a1b](https://github.com/JoshCoady/release-test/commit/a939a1b544ac21a851f5cdcc2ef711814cc70311))
* change to use an action for release ([758c218](https://github.com/JoshCoady/release-test/commit/758c218b4c38e208ad19aa82a806586771e4ab9a))
* custom formatter ([b69e250](https://github.com/JoshCoady/release-test/commit/b69e250d5136d50695b80509116fb671f1272040))
* enable building on prod branch ([b7bb9b9](https://github.com/JoshCoady/release-test/commit/b7bb9b9c114f1aaa8dca16bbd685fb70d9b7a35d))
* enable release debug ([fce16e3](https://github.com/JoshCoady/release-test/commit/fce16e3b37c25c1a5305bf05a36783cd513c6a98))
* make it work ([3d1ac88](https://github.com/JoshCoady/release-test/commit/3d1ac882c4c8bd4645f9d2b52526fe2f997c075b))
* reset versioning ([941e0bf](https://github.com/JoshCoady/release-test/commit/941e0bf270f20f06998940f2b15817caf7524a64))
* slack test ([7953bc0](https://github.com/JoshCoady/release-test/commit/7953bc0a55bc9e35c66c4d802b5b36dbe229556b))
* switch to using published slackify action ([d3816de](https://github.com/JoshCoady/release-test/commit/d3816de51fcb519587e5e3d0ab11fbc4843f22d6))
* test conversion ([21cdcf5](https://github.com/JoshCoady/release-test/commit/21cdcf55f2b26db1559aeedd9586620b067fe744))
* try a diff slack sender ([dcd765d](https://github.com/JoshCoady/release-test/commit/dcd765d4469517e31fb005d16cf6286059879a9a))
* try adding slack signing secret ([59e75ac](https://github.com/JoshCoady/release-test/commit/59e75ac80826ab686cf8b71c910fc5a7f435f9ad))
* try again as a prerelease ([7ce9b40](https://github.com/JoshCoady/release-test/commit/7ce9b4065438b70851fa071c68e6a1a687eebe75))
* try as a prerelease ([6809d87](https://github.com/JoshCoady/release-test/commit/6809d87e718af77bc73dd21b930ec026c18cbe2a))
* try as not a prerelease ([e0b188c](https://github.com/JoshCoady/release-test/commit/e0b188c6f69760ab3724b4e3a24f9ce995adcf97))
* try using blocks ([0acef1c](https://github.com/JoshCoady/release-test/commit/0acef1c7f742de973201a26bd6333abda93193c4))
* tweak formating ([d10abe4](https://github.com/JoshCoady/release-test/commit/d10abe4f52c98a3bb594554afcd12bc46c4090b5))
* tweak release config ([89fbe5b](https://github.com/JoshCoady/release-test/commit/89fbe5b719e4b91a609f95f43444a5bae121865b))

# [1.0.0-beta.2](https://github.com/JoshCoady/release-test/compare/v1.0.0-beta.1...v1.0.0-beta.2) (2020-06-13)


### Bug Fixes

* only push on prod release ([b6087c7](https://github.com/JoshCoady/release-test/commit/b6087c77ba84bf11ccb55abf45df5a90491b95b6))

# 1.0.0-beta.1 (2020-06-13)


### Bug Fixes

* add `--force` flag to overwrite existing tag ([5d61b0c](https://github.com/JoshCoady/release-test/commit/5d61b0ca2c73541538091204f8f96fae1edd6f0f))
* build steps processing release run even if no release ([d58d447](https://github.com/JoshCoady/release-test/commit/d58d447047436a5ee98f468547452c0ad667ca80))
* need to include node_modules ([268c7cd](https://github.com/JoshCoady/release-test/commit/268c7cd42135fce52d05441d6888d4290fafd445))
* remove npm build set ([50b0317](https://github.com/JoshCoady/release-test/commit/50b0317103582c5e2ed73d7a381744c526d11a4f))
* script needs to be executable ([f036989](https://github.com/JoshCoady/release-test/commit/f0369895eacae31c41969b2964764b190120d931))
* slack action version number ([8ce35e9](https://github.com/JoshCoady/release-test/commit/8ce35e94a3d620f016ef0bf3fb74983051b6d768))
* test script ([9cb77a9](https://github.com/JoshCoady/release-test/commit/9cb77a9b530819990ee70406ca5c1bc1587777ef))
* try my member id ([4b53773](https://github.com/JoshCoady/release-test/commit/4b537732ffe6a4fb8a9ab30b2150237d99b662ed))


### Features

* add changelog updating ([6fdc64a](https://github.com/JoshCoady/release-test/commit/6fdc64a9fc123e599f08ee6fcb2bc4fd3a3594ab))
* add semantic release config and related files ([4a6f35c](https://github.com/JoshCoady/release-test/commit/4a6f35c76f14c8d279c4ffc0ef19a09f846828f5))
* add test message ([ec042aa](https://github.com/JoshCoady/release-test/commit/ec042aaa88bfa3ce8f20b853a906b9d35bc6978e))
* auto-tag major ([1231571](https://github.com/JoshCoady/release-test/commit/123157136818aa86a4203b09c4aa87e3b199bc91))
* change release message ([a939a1b](https://github.com/JoshCoady/release-test/commit/a939a1b544ac21a851f5cdcc2ef711814cc70311))
* change to use an action for release ([758c218](https://github.com/JoshCoady/release-test/commit/758c218b4c38e208ad19aa82a806586771e4ab9a))
* custom formatter ([b69e250](https://github.com/JoshCoady/release-test/commit/b69e250d5136d50695b80509116fb671f1272040))
* enable building on prod branch ([b7bb9b9](https://github.com/JoshCoady/release-test/commit/b7bb9b9c114f1aaa8dca16bbd685fb70d9b7a35d))
* enable release debug ([fce16e3](https://github.com/JoshCoady/release-test/commit/fce16e3b37c25c1a5305bf05a36783cd513c6a98))
* make it work ([3d1ac88](https://github.com/JoshCoady/release-test/commit/3d1ac882c4c8bd4645f9d2b52526fe2f997c075b))
* reset versioning ([941e0bf](https://github.com/JoshCoady/release-test/commit/941e0bf270f20f06998940f2b15817caf7524a64))
* slack test ([7953bc0](https://github.com/JoshCoady/release-test/commit/7953bc0a55bc9e35c66c4d802b5b36dbe229556b))
* switch to using published slackify action ([d3816de](https://github.com/JoshCoady/release-test/commit/d3816de51fcb519587e5e3d0ab11fbc4843f22d6))
* test conversion ([21cdcf5](https://github.com/JoshCoady/release-test/commit/21cdcf55f2b26db1559aeedd9586620b067fe744))
* try a diff slack sender ([dcd765d](https://github.com/JoshCoady/release-test/commit/dcd765d4469517e31fb005d16cf6286059879a9a))
* try adding slack signing secret ([59e75ac](https://github.com/JoshCoady/release-test/commit/59e75ac80826ab686cf8b71c910fc5a7f435f9ad))
* try again as a prerelease ([7ce9b40](https://github.com/JoshCoady/release-test/commit/7ce9b4065438b70851fa071c68e6a1a687eebe75))
* try as a prerelease ([6809d87](https://github.com/JoshCoady/release-test/commit/6809d87e718af77bc73dd21b930ec026c18cbe2a))
* try as not a prerelease ([e0b188c](https://github.com/JoshCoady/release-test/commit/e0b188c6f69760ab3724b4e3a24f9ce995adcf97))
* try using blocks ([0acef1c](https://github.com/JoshCoady/release-test/commit/0acef1c7f742de973201a26bd6333abda93193c4))
* tweak formating ([d10abe4](https://github.com/JoshCoady/release-test/commit/d10abe4f52c98a3bb594554afcd12bc46c4090b5))
* tweak release config ([89fbe5b](https://github.com/JoshCoady/release-test/commit/89fbe5b719e4b91a609f95f43444a5bae121865b))

# [1.18.0-test.1](https://github.com/JoshCoady/release-test/compare/v1.17.0...v1.18.0-test.1) (2020-06-13)


### Features

* try again as a prerelease ([7ce9b40](https://github.com/JoshCoady/release-test/commit/7ce9b4065438b70851fa071c68e6a1a687eebe75))

# [1.17.0](https://github.com/JoshCoady/release-test/compare/v1.16.0...v1.17.0) (2020-06-13)


### Features

* try as not a prerelease ([e0b188c](https://github.com/JoshCoady/release-test/commit/e0b188c6f69760ab3724b4e3a24f9ce995adcf97))

# [1.16.0](https://github.com/JoshCoady/release-test/compare/v1.15.0...v1.16.0) (2020-06-13)


### Features

* try as a prerelease ([6809d87](https://github.com/JoshCoady/release-test/commit/6809d87e718af77bc73dd21b930ec026c18cbe2a))

# [1.16.0-test.1](https://github.com/JoshCoady/release-test/compare/v1.15.0...v1.16.0-test.1) (2020-06-13)


### Features

* try as a prerelease ([6809d87](https://github.com/JoshCoady/release-test/commit/6809d87e718af77bc73dd21b930ec026c18cbe2a))

# [1.15.0](https://github.com/JoshCoady/release-test/compare/v1.14.0...v1.15.0) (2020-06-13)


### Features

* tweak release config ([89fbe5b](https://github.com/JoshCoady/release-test/commit/89fbe5b719e4b91a609f95f43444a5bae121865b))

# [1.14.0](https://github.com/JoshCoady/release-test/compare/v1.13.0...v1.14.0) (2020-06-13)


### Features

* enable release debug ([fce16e3](https://github.com/JoshCoady/release-test/commit/fce16e3b37c25c1a5305bf05a36783cd513c6a98))

# [1.13.0](https://github.com/JoshCoady/release-test/compare/v1.12.1...v1.13.0) (2020-06-13)


### Features

* enable building on prod branch ([b7bb9b9](https://github.com/JoshCoady/release-test/commit/b7bb9b9c114f1aaa8dca16bbd685fb70d9b7a35d))

## [1.12.1](https://github.com/JoshCoady/release-test/compare/v1.12.0...v1.12.1) (2020-06-12)


### Bug Fixes

* add `--force` flag to overwrite existing tag ([5d61b0c](https://github.com/JoshCoady/release-test/commit/5d61b0ca2c73541538091204f8f96fae1edd6f0f))

# [1.12.0](https://github.com/JoshCoady/release-test/compare/v1.11.0...v1.12.0) (2020-06-12)


### Bug Fixes

* build steps processing release run even if no release ([d58d447](https://github.com/JoshCoady/release-test/commit/d58d447047436a5ee98f468547452c0ad667ca80))


### Features

* switch to using published slackify action ([d3816de](https://github.com/JoshCoady/release-test/commit/d3816de51fcb519587e5e3d0ab11fbc4843f22d6))

# [1.11.0](https://github.com/JoshCoady/release-test/compare/v1.10.0...v1.11.0) (2020-06-12)


### Features

* auto-tag major ([1231571](https://github.com/JoshCoady/release-test/commit/123157136818aa86a4203b09c4aa87e3b199bc91))

# [1.10.0](https://github.com/JoshCoady/release-test/compare/v1.9.1...v1.10.0) (2020-06-12)


### Features

* test conversion ([21cdcf5](https://github.com/JoshCoady/release-test/commit/21cdcf55f2b26db1559aeedd9586620b067fe744))

## [1.9.1](https://github.com/JoshCoady/release-test/compare/v1.9.0...v1.9.1) (2020-06-12)


### Bug Fixes

* need to include node_modules ([268c7cd](https://github.com/JoshCoady/release-test/commit/268c7cd42135fce52d05441d6888d4290fafd445))

# [1.9.0](https://github.com/JoshCoady/release-test/compare/v1.8.0...v1.9.0) (2020-06-12)


### Features

* custom formatter ([b69e250](https://github.com/JoshCoady/release-test/commit/b69e250d5136d50695b80509116fb671f1272040))

# [1.8.0](https://github.com/JoshCoady/release-test/compare/v1.7.0...v1.8.0) (2020-06-12)


### Features

* add test message ([ec042aa](https://github.com/JoshCoady/release-test/commit/ec042aaa88bfa3ce8f20b853a906b9d35bc6978e))

# [1.7.0](https://github.com/JoshCoady/release-test/compare/v1.6.0...v1.7.0) (2020-06-12)


### Features

* try adding slack signing secret ([59e75ac](https://github.com/JoshCoady/release-test/commit/59e75ac80826ab686cf8b71c910fc5a7f435f9ad))

# [1.6.0](https://github.com/JoshCoady/release-test/compare/v1.5.0...v1.6.0) (2020-06-12)


### Features

* try a diff slack sender ([dcd765d](https://github.com/JoshCoady/release-test/commit/dcd765d4469517e31fb005d16cf6286059879a9a))

# [1.5.0](https://github.com/JoshCoady/release-test/compare/v1.4.0...v1.5.0) (2020-06-12)


### Features

* try using blocks ([0acef1c](https://github.com/JoshCoady/release-test/commit/0acef1c7f742de973201a26bd6333abda93193c4))

# [1.4.0](https://github.com/JoshCoady/release-test/compare/v1.3.0...v1.4.0) (2020-06-12)


### Features

* tweak formating ([d10abe4](https://github.com/JoshCoady/release-test/commit/d10abe4f52c98a3bb594554afcd12bc46c4090b5))

# [1.3.0](https://github.com/JoshCoady/release-test/compare/v1.2.1...v1.3.0) (2020-06-12)


### Bug Fixes

* remove npm build set ([50b0317](https://github.com/JoshCoady/release-test/commit/50b0317103582c5e2ed73d7a381744c526d11a4f))


### Features

* change release message ([a939a1b](https://github.com/JoshCoady/release-test/commit/a939a1b544ac21a851f5cdcc2ef711814cc70311))
* change to use an action for release ([758c218](https://github.com/JoshCoady/release-test/commit/758c218b4c38e208ad19aa82a806586771e4ab9a))

## [1.2.1](https://github.com/JoshCoady/release-test/compare/v1.2.0...v1.2.1) (2020-06-12)


### Bug Fixes

* try my member id ([4b53773](https://github.com/JoshCoady/release-test/commit/4b537732ffe6a4fb8a9ab30b2150237d99b662ed))

# [1.2.0](https://github.com/JoshCoady/release-test/compare/v1.1.0...v1.2.0) (2020-06-12)


### Bug Fixes

* slack action version number ([8ce35e9](https://github.com/JoshCoady/release-test/commit/8ce35e94a3d620f016ef0bf3fb74983051b6d768))


### Features

* slack test ([7953bc0](https://github.com/JoshCoady/release-test/commit/7953bc0a55bc9e35c66c4d802b5b36dbe229556b))

# [1.1.0](https://github.com/JoshCoady/release-test/compare/v1.0.0...v1.1.0) (2020-06-12)


### Features

* add changelog updating ([6fdc64a](https://github.com/JoshCoady/release-test/commit/6fdc64a9fc123e599f08ee6fcb2bc4fd3a3594ab))
