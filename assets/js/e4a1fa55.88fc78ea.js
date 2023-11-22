"use strict";(self.webpackChunkdataport_docusaurus=self.webpackChunkdataport_docusaurus||[]).push([[4293],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>m});var s=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);t&&(s=s.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,s)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,s,o=function(e,t){if(null==e)return{};var n,s,o={},a=Object.keys(e);for(s=0;s<a.length;s++)n=a[s],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(s=0;s<a.length;s++)n=a[s],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=s.createContext({}),c=function(e){var t=s.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},u=function(e){var t=c(e.components);return s.createElement(l.Provider,{value:t},e.children)},d="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return s.createElement(s.Fragment,{},t)}},h=s.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),d=c(n),h=o,m=d["".concat(l,".").concat(h)]||d[h]||p[h]||a;return n?s.createElement(m,r(r({ref:t},u),{},{components:n})):s.createElement(m,r({ref:t},u))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,r=new Array(a);r[0]=h;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i[d]="string"==typeof e?e:o,r[1]=i;for(var c=2;c<a;c++)r[c]=n[c];return s.createElement.apply(null,r)}return s.createElement.apply(null,n)}h.displayName="MDXCreateElement"},9567:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>r,default:()=>p,frontMatter:()=>a,metadata:()=>i,toc:()=>c});var s=n(7462),o=(n(7294),n(3905));const a={},r="Testing",i={unversionedId:"schulcloud-server/Coding-Guidelines/testing",id:"schulcloud-server/Coding-Guidelines/testing",title:"Testing",description:"Automated testing is the essential part of the software development process.",source:"@site/docs/schulcloud-server/Coding-Guidelines/testing.md",sourceDirName:"schulcloud-server/Coding-Guidelines",slug:"/schulcloud-server/Coding-Guidelines/testing",permalink:"/docs/schulcloud-server/Coding-Guidelines/testing",draft:!1,editUrl:"https://github.com/hpi-schul-cloud/hpi-schul-cloud.github.io/blob/main/docs/schulcloud-server/Coding-Guidelines/testing.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Logging",permalink:"/docs/schulcloud-server/Coding-Guidelines/logging"},next:{title:"Git",permalink:"/docs/schulcloud-server/Development/git"}},l={},c=[{value:"General Test Conventions",id:"general-test-conventions",level:2},{value:"Lean Tests",id:"lean-tests",level:3},{value:"Naming Convention",id:"naming-convention",level:3},{value:"Isolation",id:"isolation",level:3},{value:"Test Structure",id:"test-structure",level:3},{value:"Testing Samples",id:"testing-samples",level:2},{value:"Handling of function return values",id:"handling-of-function-return-values",level:3},{value:"Promises and Timouts in tests",id:"promises-and-timouts-in-tests",level:3},{value:"Expecting errors in tests",id:"expecting-errors-in-tests",level:3},{value:"Testing Utilities",id:"testing-utilities",level:2},{value:"Mocking",id:"mocking",level:2},{value:"Unit Tests vs Integration Tests",id:"unit-tests-vs-integration-tests",level:2},{value:"Repo Tests",id:"repo-tests",level:3},{value:"Preconditions (beforeAll)",id:"preconditions-beforeall",level:4},{value:"Post conditions (afterAll), Teardown",id:"post-conditions-afterall-teardown",level:4},{value:"Entity Factories",id:"entity-factories",level:4},{value:"Accessing the in-memory-db",id:"accessing-the-in-memory-db",level:4},{value:"Mapping Tests",id:"mapping-tests",level:3},{value:"Use Case Tests",id:"use-case-tests",level:3},{value:"Controller Tests",id:"controller-tests",level:3},{value:"API Tests",id:"api-tests",level:3},{value:"References",id:"references",level:2}],u={toc:c},d="wrapper";function p(e){let{components:t,...n}=e;return(0,o.kt)(d,(0,s.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"testing"},"Testing"),(0,o.kt)("p",null,"Automated testing is the essential part of the software development process.\nIt improves the code quality and ensure that the code operates correctly especially after refactoring."),(0,o.kt)("h2",{id:"general-test-conventions"},"General Test Conventions"),(0,o.kt)("h3",{id:"lean-tests"},"Lean Tests"),(0,o.kt)("p",null,"The tests should be as simple to read and understand as possible. They should be effortless to write and change, in order to not slow down development. Wherever possible:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"avoid complex logic"),(0,o.kt)("li",{parentName:"ul"},"cover only one case per test"),(0,o.kt)("li",{parentName:"ul"},"only use clearly named and widely used helper functions"),(0,o.kt)("li",{parentName:"ul"},"stick to blackbox testing: think about the unit from the outside, not its inner workings."),(0,o.kt)("li",{parentName:"ul"},"its okay to duplicate code for each test")),(0,o.kt)("h3",{id:"naming-convention"},"Naming Convention"),(0,o.kt)("p",null,'When a test fails, the name of the test is the first hint to the developer (or any other person) to what went wrong where. (along with the "describe" blocks the test is in).\nThus, your describe structure and testcase names should be designed to enable a person unfamiliar with the code to identify the problem as fast as possible. It should tell him:'),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"what component is being tested"),(0,o.kt)("li",{parentName:"ul"},"under what condition"),(0,o.kt)("li",{parentName:"ul"},"the expected outcome")),(0,o.kt)("p",null,"To facilitate this, your tests should be wrapped in at least two describe levels."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-TypeScript"},'// Name of the unit under test\ndescribe("Course Service", (() => {\n    // method that is called\n    describe(\'createCourse\', () => {\n        // a "when..." sentence\n        describe("When a student tries to create a course", (() => {\n            const setup = () => {\n                // testsetup for the situation that was described\n            }\n            // a "should..." sentence\n            it("should return course", async () => {\n                ...\n            });\n        });\n    });\n});\n')),(0,o.kt)("h3",{id:"isolation"},"Isolation"),(0,o.kt)("p",null,"Each test should be able to run alone, as well as together with any other tests. To ensure this, it is important that the test does not depend on any preexisting data."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},'Each test should generate the data it needs, and ensure that its data is deleted afterwards. (this is usually done via mocha\'s "afterEach" function.'),(0,o.kt)("li",{parentName:"ul"},"When you create objects with fields that have to be globally unique, like the account username, you must ensure the name you choose is unique. This can be done by including a timestamp."),(0,o.kt)("li",{parentName:"ul"},"Never use seeddata.")),(0,o.kt)("h3",{id:"test-structure"},"Test Structure"),(0,o.kt)("p",null,"Your test should be structured in three seperate areas, each distinguished by at least an empty line:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Arrange - set up your testdata"),(0,o.kt)("li",{parentName:"ul"},"Act - call the function you want to test"),(0,o.kt)("li",{parentName:"ul"},"Assert - check the result")),(0,o.kt)("p",null,"this is known as the AAA-pattern."),(0,o.kt)("p",null,"The tests for a unit should cover as much scenarios as possible. Parameters and the combination of parameters can often take numerous values. Therefore it largely differs from case to case what a sufficient amount of scenarios would be. Parameter values that contradict the typescript type definition should be ignored as a test case.\nThe test coverage report already enforces scenarios that test every possible if/else result in the code. But still some scenarios are not covered by the report and must be tested:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"All error scenarios: That means one describe block for every call that can reject.")),(0,o.kt)("p",null,"We use different levels of describe blocks to structure the tests in a way, that the tested scenarios could easily be recognized. The outer describe would be the function call itself. Every scenario is added as another describe inside the outer describe."),(0,o.kt)("p",null,"All of the data and mock preparation should happen in a setup function. Every describe scenario only contains one setup function and is called in every test. No further data or mock preparation should be added to the test. Often there will be only one test in every describe scenario, this is perfectly fine with our desired structure."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-TypeScript"},"describe('[method]', () => {\n    describe('when [senario description that is prepared in setup]', () => {\n        const setup = () => {\n            // prepare the data and mocks for this scenario\n        };\n\n        it('...', () => {\n            const { } = setup();\n        });\n\n        it('...', () => {\n            const { } = setup();\n        });\n    });\n\n    describe('when [senario description that is prepared in setup]', () => {\n        const setup = () => {\n            // prepare the data and mocks for this scenario\n        };\n\n        it('...', () => {\n            const { } = setup();\n        });\n    });\n});\n")),(0,o.kt)("h2",{id:"testing-samples"},"Testing Samples"),(0,o.kt)("h3",{id:"handling-of-function-return-values"},"Handling of function return values"),(0,o.kt)("p",null,"When assigning a value to an expect, separate the function call from the expectation to simplify debugging. This later helps when you not know about the return value type or if it's an promise or not. This is good style not only for tests."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-TypeScript"},"    // doSomethingCrazy : retValue\n    it('bad sample', () => {\n        expect(doSomethingCrazy(x,y,z)).to...\n    })\n    it('good sample', () => {\n        const result = doSomethingCrazy(x,y,z)\n        expect(result).to... // here we can simply debug\n    })\n\n")),(0,o.kt)("h3",{id:"promises-and-timouts-in-tests"},"Promises and Timouts in tests"),(0,o.kt)("p",null,"When using asynchronous functions and/opr promises, results must be awaited within of an async test function instead of using promise chains. While for expecting error conditions it might be helpful to use catch for extracting a value from an expected error, in every case avoid writing long promise chains."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Instead of using done callback, use async test functions."),(0,o.kt)("li",{parentName:"ul"},"Use await instead of (long) promise chains"),(0,o.kt)("li",{parentName:"ul"},"never manually set a timeout")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-TypeScript"},"    // doSomethingCrazy : Promise<retValue>\n    it('bad async sample', async function (done) => {\n        return doSomethingCrazy(x,y,z).then(result=>{\n            expect(result).to...\n            done() // expected done\n        }).catch(()=>{\n            logger.info(`Could not ... ${error}`);\n            done() // unexpected done, test will always succeed which is wrong\n        })\n    }, 10000 /* timeout in ms */) \n\n    it('good async sample', async () => {\n        // no timeout set\n        const result = await doSomethingCrazy(x,y,z)\n        expect(result).to...\n    })\n")),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Timeouts must not be used, when async handling is correctly defined!")),(0,o.kt)("h3",{id:"expecting-errors-in-tests"},"Expecting errors in tests"),(0,o.kt)("p",null,"When expecting an error, you might take values from an error, test for the error type thrown and must care of promises."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-TypeScript"},"    // doSomethingCrazy : Promise<retValue>\n    it('bad async sample expecting an error', () => {\n        expect(doSomethingCrazy(x,y,z)).to...\n    })\n    it('good async sample expecting an error value', async () => {\n        const code = await doSomethingCrazy(x,y,z).catch(err => err.code)\n        expect(code).to...\n    })\n    it('good sample expecting an error type from a sync function', () => {\n        expect(() => doSomethingCrazySync(wrong, param)).toThrow(BadRequestException);\n    })\n    it('good sample expecting an error type from an async function', async () => {\n        await expect(doSomethingCrazySync(wrong, param)).rejects.toThrow(BadRequestException);\n    })\n")),(0,o.kt)("h2",{id:"testing-utilities"},"Testing Utilities"),(0,o.kt)("p",null,"NestJS:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"provides default tooling (such as test runner that builds an isolated module/application loader)"),(0,o.kt)("li",{parentName:"ul"},"provides integration with ",(0,o.kt)("strong",{parentName:"li"},"Jest")," and ",(0,o.kt)("strong",{parentName:"li"},"Supertest")," out of the box"),(0,o.kt)("li",{parentName:"ul"},"makes the Nest dependency injection system available in the testing environment for mocking components")),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"@nestjs/testing.Test")," class provides an execution context that mocks the full Nest runtime, but gives\nhooks that can help to manage class instances, including mocking and overriding."),(0,o.kt)("p",null,"The method ",(0,o.kt)("inlineCode",{parentName:"p"},"Test.createTestingModule()")," takes module metadata as argument it returns ",(0,o.kt)("inlineCode",{parentName:"p"},"TestingModule")," instance.\nThe ",(0,o.kt)("inlineCode",{parentName:"p"},"TestingModule")," instance provides method ",(0,o.kt)("inlineCode",{parentName:"p"},"compile()")," which bootstraps a module with its dependencies.\nEvery provider can be overwritten with custom provider implementation for testing purposes."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-Typescript"},"  beforeAll(async () => {\n      const moduleRef = await Test.createTestingModule({\n          controllers: [SampleController],\n          providers: [SampleService],\n        }).compile();\n\n      sampleService = moduleRef.get<SampleService>(SampleService);\n      sampleController = moduleRef.get<SampleController>(CatsController);\n    });\n")),(0,o.kt)("h2",{id:"mocking"},"Mocking"),(0,o.kt)("p",null,"Using the utilities provided by NestJs, we can easily inject mocks into our testing module. The mocks themselves, we create using a ",(0,o.kt)("a",{parentName:"p",href:"https://www.npmjs.com/package/@golevelup/ts-jest"},"library")," by @golevelup."),(0,o.kt)("p",null,"You can create a mock using ",(0,o.kt)("inlineCode",{parentName:"p"},"createMock<Class>()"),". As result you will recieved a ",(0,o.kt)("inlineCode",{parentName:"p"},"DeepMocked<Class>")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-Typescript"},"let fut: FeatureUnderTest;\nlet mockService: DeepMocked<MockService>;\n\nbeforeAll(async () => {\n    const module = await Test.createTestingModule({\n        providers: [\n            FeatureUnderTest,\n            {\n                provide: MockService,\n                useValue: createMock<MockService>(),\n            },\n        ],\n    }).compile();\n\n    fut = module.get(FeatureUnderTest);\n    mockService = module.get(MockService);\n});\n\nafterAll(async () => {\n    await module.close();\n});\n\nafterEach(() => {\n    jest.resetAllMocks();\n})\n")),(0,o.kt)("p",null,"The resulting mock has all the functions of the original ",(0,o.kt)("inlineCode",{parentName:"p"},"Class"),", replaced with jest spies. This gives you code completion and type safety, combined with all the features of spies."),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"createTestingModule")," should only be calld in ",(0,o.kt)("inlineCode",{parentName:"p"},"beforeAll")," and not in ",(0,o.kt)("inlineCode",{parentName:"p"},"beforeEach")," to keep the setup and teardown for each test as simple as possible. Therefore ",(0,o.kt)("inlineCode",{parentName:"p"},"module.close")," should only be called in ",(0,o.kt)("inlineCode",{parentName:"p"},"afterAll")," and not in ",(0,o.kt)("inlineCode",{parentName:"p"},"afterEach"),"."),(0,o.kt)("p",null,"To generally reset specific mock implementation after each test ",(0,o.kt)("inlineCode",{parentName:"p"},"jest.resetAllMocks")," can be used in afterEach. ",(0,o.kt)("inlineCode",{parentName:"p"},"jest.restoreAllMocks")," should not be used, because in some cases it will not properly restore mocks created by ts-jest."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-Typescript"},"describe('somefunction', () => {\n    describe('when service returns user', () => {\n        const setup = () => {\n            const resultUser = userFactory.buildWithId();\n\n            mockService.getUser.mockReturnValueOnce(resultUser);\n\n            return { resultUser };\n        };\n\n        it('should call service', async () => {\n            setup();\n            await fut.somefunction();\n            expect(mockService.getUser).toHaveBeenCalled();\n        });\n\n        it('should return user passed by service', async () => {\n            const { resultUser } = setup();\n            const result = await fut.somefunction();\n            expect(result).toEqual(resultUser);\n        });\n    });\n});\n")),(0,o.kt)("p",null,"For creating specific mock implementations the helper functions which only mock the implementation once, must be used (e.g. mockReturnValueOnce). With that approach more control over mocked functions can be achieved."),(0,o.kt)("p",null,"If you want to mock a method that is not part of a dependency you can mock it with ",(0,o.kt)("inlineCode",{parentName:"p"},"jest.spyOn"),". We strongly recommend the use of ",(0,o.kt)("inlineCode",{parentName:"p"},"jest.spyOn")," and not ",(0,o.kt)("inlineCode",{parentName:"p"},"jest.fn"),", because ",(0,o.kt)("inlineCode",{parentName:"p"},"jest.spyOn")," can be restored a lot easier."),(0,o.kt)("h2",{id:"unit-tests-vs-integration-tests"},"Unit Tests vs Integration Tests"),(0,o.kt)("p",null,"In Unit Tests we access directly only the component which is currently testing.\nAny dependencies should be mocked or are replaced with default testing implementation.\nEspecially the database access and database calls should be mocked."),(0,o.kt)("p",null,"In contrast to unit tests the integration tests use access to the database and execute\nreal queries using repositories."),(0,o.kt)("h3",{id:"repo-tests"},"Repo Tests"),(0,o.kt)("p",null,"For the data access layer, integration tests can be used to check the repositories base functionality against a database."),(0,o.kt)("p",null,"For Queries care DRY principle, they should be tested very carefully."),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Use a in-memory database for testing to allow parallel test execution and have isolated execution of tests.\nA test must define the before and after state of the data set clearly and cleanup the database after execution to the before state.\nInstead of using predefined data sets, all preconditions should be defined in code through fixtures.")),(0,o.kt)("p",null,"Our repository layer uses ",(0,o.kt)("inlineCode",{parentName:"p"},"mikro-orm/EntityManager")," to execute the queries.\nBy testing repositories we want to verify the correct behaviour of the repository functions.\nIt includes verifying expected database state after executed repository function.\nTherefore, the ",(0,o.kt)("inlineCode",{parentName:"p"},"*.repo.integration.spec.js")," should be used."),(0,o.kt)("p",null,"The basic structure of the repo integration test:"),(0,o.kt)("h4",{id:"preconditions-beforeall"},"Preconditions (beforeAll)"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Create ",(0,o.kt)("inlineCode",{parentName:"li"},"Nest JS testing module"),":\n1.1 with ",(0,o.kt)("inlineCode",{parentName:"li"},"MongoMemoryDatabaseModule")," defining entities which are used in tests. This will wrap MikroOrmModule.forRoot() with running a MongoDB in memory.\n1.2 provide the repo which should be tested"),(0,o.kt)("li",{parentName:"ol"},"Get repo, orm and entityManager from testing module")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-TypeScript"},"    import { MongoMemoryDatabaseModule } from '@src/modules/database';\n\n    let repo: NewsRepo;\n    let em: EntityManager;\n    let testModule: TestingModule;\n\n    beforeAll(async () => {\n        testModule: TestingModule = await Test.createTestingModule({    (1)\n             imports: [\n                     MongoMemoryDatabaseModule.forRoot({                 (1.1)\n                    entities: [News, CourseNews, ...],\n                }),\n              ],\n             providers: [NewsRepo],                                     (1.2)\n      }).compile();\n      repo = testModule.get(NewsRepo);                                  (2)\n      orm = testModule.get(MikroORM);\n      em = testModule.get(EntityManager);\n    })\n")),(0,o.kt)("h4",{id:"post-conditions-afterall-teardown"},"Post conditions (afterAll), Teardown"),(0,o.kt)("p",null,"After all tests are executed close the app and orm to release the resources by closing the test module."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-TypeScript"},"    afterAll(async () => {\n        await testModule.close();\n    });\n")),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"When Jest reports open handles that not have been closed, ensure all Promises are awaited and all application parts started are correctly closed.")),(0,o.kt)("h4",{id:"entity-factories"},"Entity Factories"),(0,o.kt)("p",null,"To fill the in-memory-db we use factories. They are located in ",(0,o.kt)("inlineCode",{parentName:"p"},"\\apps\\server\\src\\shared\\testing\\factory"),". If you create a new one, please add it to the index.ts in that folder."),(0,o.kt)("h4",{id:"accessing-the-in-memory-db"},"Accessing the in-memory-db"),(0,o.kt)("p",null,"While debugging the tests, the URL to the in-memory-db can be found in the ",(0,o.kt)("inlineCode",{parentName:"p"},"EntityManager")," instance of your repo in ",(0,o.kt)("inlineCode",{parentName:"p"},"em.config.options.clientUrl"),"."),(0,o.kt)("p",null,"Copy paste this URL to your DB Tool e.g. MongoDB Compass. You will find a database called 'test' with the data you created for your test."),(0,o.kt)("h3",{id:"mapping-tests"},"Mapping Tests"),(0,o.kt)("p",null,"Mapping tests are Unit Tests which verify the correct mapping between entities and Dto objects.\nThese tests should not have any external dependencies to other layers like database or use cases."),(0,o.kt)("h3",{id:"use-case-tests"},"Use Case Tests"),(0,o.kt)("p",null,"Since a ",(0,o.kt)("a",{parentName:"p",href:"/docs/schulcloud-server/architecture#domain-layer"},"usecase")," only contains orchestration, its tests should be decoupled from the components it depends on. We thus use unittests to verify the orchestration where necessary"),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"All Dependencies should be mocked.\nUse Spies to verify necessary steps, such as authorisation checks.")),(0,o.kt)("p",null,"to be documented"),(0,o.kt)("h3",{id:"controller-tests"},"Controller Tests"),(0,o.kt)("p",null,"Controllers do not contain any logic, but exclusively information to map and validate between dataformats used on the network, and those used internally, as well as documentation of the api."),(0,o.kt)("p",null,"Most of these things can not be covered by unit tests. Therefore we do not write specific unittests for them, and only cover them with ",(0,o.kt)("a",{parentName:"p",href:"#api-tests"},"api tests"),"."),(0,o.kt)("h3",{id:"api-tests"},"API Tests"),(0,o.kt)("p",null,"The API tests are plumbing or integration tests. Their job is to make sure all components that interact to fulfill a specific api endpoint are wired up correctly, and fulfil the expectation set up in the documentation."),(0,o.kt)("p",null,"API tests should be located in the folder ",(0,o.kt)("em",{parentName:"p"},"controller/api-test")," of each module."),(0,o.kt)("p",null,"They should call the endpoint like a external entity would, treating it like a blackbox. It should try all parameters available on the API, users with different roles, as well as relevant error cases."),(0,o.kt)("p",null,"During the API test, all components that are part of the server, or controlled by the server, should be available. This includes an in-memory database."),(0,o.kt)("p",null,"Any external services or servers that are outside our control should be mocked away via their respective adapters."),(0,o.kt)("h2",{id:"references"},"References"),(0,o.kt)("p",null,"This guide is inspired by ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/goldbergyoni/javascript-testing-best-practices/"},"javascript-testing-best-practices by goldbergyoni")))}p.isMDXComponent=!0}}]);