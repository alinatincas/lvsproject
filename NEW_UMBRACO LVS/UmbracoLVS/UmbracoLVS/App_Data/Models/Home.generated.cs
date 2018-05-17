//------------------------------------------------------------------------------
// <auto-generated>
//   This code was generated by a tool.
//
//    Umbraco.ModelsBuilder v3.0.10.102
//
//   Changes to this file will be lost if the code is regenerated.
// </auto-generated>
//------------------------------------------------------------------------------

using System;
using System.Collections.Generic;
using System.Linq.Expressions;
using System.Web;
using Umbraco.Core.Models;
using Umbraco.Core.Models.PublishedContent;
using Umbraco.Web;
using Umbraco.ModelsBuilder;
using Umbraco.ModelsBuilder.Umbraco;

namespace Umbraco.Web.PublishedContentModels
{
	/// <summary>Home</summary>
	[PublishedContentModel("home")]
	public partial class Home : PublishedContentModel, IBaseContent, IFeaturedContent, IHeroHeader, IScripts, ISeo
	{
#pragma warning disable 0109 // new is redundant
		public new const string ModelTypeAlias = "home";
		public new const PublishedItemType ModelItemType = PublishedItemType.Content;
#pragma warning restore 0109

		public Home(IPublishedContent content)
			: base(content)
		{ }

#pragma warning disable 0109 // new is redundant
		public new static PublishedContentType GetModelContentType()
		{
			return PublishedContentType.Get(ModelItemType, ModelTypeAlias);
		}
#pragma warning restore 0109

		public static PublishedPropertyType GetModelPropertyType<TValue>(Expression<Func<Home, TValue>> selector)
		{
			return PublishedContentModelUtility.GetModelPropertyType(GetModelContentType(), selector);
		}

		///<summary>
		/// Good story box
		///</summary>
		[ImplementPropertyType("goodStoryBox")]
		public IEnumerable<IPublishedContent> GoodStoryBox
		{
			get { return this.GetPropertyValue<IEnumerable<IPublishedContent>>("goodStoryBox"); }
		}

		///<summary>
		/// Grid list
		///</summary>
		[ImplementPropertyType("gridList")]
		public IEnumerable<IPublishedContent> GridList
		{
			get { return this.GetPropertyValue<IEnumerable<IPublishedContent>>("gridList"); }
		}

		///<summary>
		/// Content
		///</summary>
		[ImplementPropertyType("content")]
		public Newtonsoft.Json.Linq.JToken Content
		{
			get { return Umbraco.Web.PublishedContentModels.BaseContent.GetContent(this); }
		}

		///<summary>
		/// Headline
		///</summary>
		[ImplementPropertyType("headline")]
		public string Headline
		{
			get { return Umbraco.Web.PublishedContentModels.BaseContent.GetHeadline(this); }
		}

		///<summary>
		/// Headline
		///</summary>
		[ImplementPropertyType("featuredHeadline")]
		public string FeaturedHeadline
		{
			get { return Umbraco.Web.PublishedContentModels.FeaturedContent.GetFeaturedHeadline(this); }
		}

		///<summary>
		/// List
		///</summary>
		[ImplementPropertyType("featuredList")]
		public IEnumerable<IPublishedContent> FeaturedList
		{
			get { return Umbraco.Web.PublishedContentModels.FeaturedContent.GetFeaturedList(this); }
		}

		///<summary>
		/// Headline
		///</summary>
		[ImplementPropertyType("heroHeadline")]
		public string HeroHeadline
		{
			get { return Umbraco.Web.PublishedContentModels.HeroHeader.GetHeroHeadline(this); }
		}

		///<summary>
		/// Background Image
		///</summary>
		[ImplementPropertyType("heroImage")]
		public IPublishedContent HeroImage
		{
			get { return Umbraco.Web.PublishedContentModels.HeroHeader.GetHeroImage(this); }
		}

		///<summary>
		/// Footer
		///</summary>
		[ImplementPropertyType("scriptsFooter")]
		public IEnumerable<string> ScriptsFooter
		{
			get { return Umbraco.Web.PublishedContentModels.Scripts.GetScriptsFooter(this); }
		}

		///<summary>
		/// Header
		///</summary>
		[ImplementPropertyType("scriptsHeader")]
		public IEnumerable<string> ScriptsHeader
		{
			get { return Umbraco.Web.PublishedContentModels.Scripts.GetScriptsHeader(this); }
		}

		///<summary>
		/// Meta description: Keep it within 160 characters, and write it to catch the user's attention. Sell the page.  Identical or similar descriptions on every page of a site aren't helpful for ranking.  (advice from Google)
		///</summary>
		[ImplementPropertyType("metaDescription")]
		public string MetaDescription
		{
			get { return Umbraco.Web.PublishedContentModels.Seo.GetMetaDescription(this); }
		}

		///<summary>
		/// Meta robots: Must be set to  INDEX,FOLLOW as a minimum.
		///</summary>
		[ImplementPropertyType("metaRobots")]
		public object MetaRobots
		{
			get { return Umbraco.Web.PublishedContentModels.Seo.GetMetaRobots(this); }
		}
	}
}
