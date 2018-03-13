/* 
 * Forge SDK
 *
 * The Forge Platform contains an expanding collection of web service components that can be used with Autodesk cloud-based products or your own technologies. Take advantage of Autodesk’s expertise in design and engineering.
 *
 * OpenAPI spec version: 0.1.0
 * Contact: forge.help@autodesk.com
 * Generated by: https://github.com/swagger-api/swagger-codegen.git
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

using System;
using System.IO;
using System.Collections.Generic;
using System.Collections.ObjectModel;
using System.Linq;
using System.Reflection;
using RestSharp;
using NUnit.Framework;

using Autodesk.Forge.Client;
using Autodesk.Forge;
using Autodesk.Forge.Model;

namespace Autodesk.Forge.Test
{
    /// <summary>
    ///  Class for testing HubsApi
    /// </summary>
    /// <remarks>
    /// This file is automatically generated by Swagger Codegen.
    /// Please update the test case below to test the API endpoint.
    /// </remarks>
    [TestFixture]
    public class HubsApiTests
    {
        private HubsApi instance;

        /// <summary>
        /// Setup before each unit test
        /// </summary>
        [SetUp]
        public void Init()
        {
            instance = new HubsApi();
        }

        /// <summary>
        /// Clean up after each unit test
        /// </summary>
        [TearDown]
        public void Cleanup()
        {

        }

        /// <summary>
        /// Test an instance of HubsApi
        /// </summary>
        [Test]
        public void InstanceTest()
        {
            // TODO uncomment below to test 'IsInstanceOfType' HubsApi
            //Assert.IsInstanceOfType(typeof(HubsApi), instance, "instance is a HubsApi");
        }

        
        /// <summary>
        /// Test GetHub
        /// </summary>
        [Test]
        public void GetHubTest()
        {
            // TODO uncomment below to test the method and replace null with proper value
            //string hubId = null;
            //var response = instance.GetHub(hubId);
            //Assert.IsInstanceOf<Hub> (response, "response is Hub");
        }
        
        /// <summary>
        /// Test GetHubs
        /// </summary>
        [Test]
        public void GetHubsTest()
        {
            // TODO uncomment below to test the method and replace null with proper value
            //List<string> filterId = null;
            //List<string> filterExtensionType = null;
            //var response = instance.GetHubs(filterId, filterExtensionType);
            //Assert.IsInstanceOf<Hubs> (response, "response is Hubs");
        }
        
    }

}