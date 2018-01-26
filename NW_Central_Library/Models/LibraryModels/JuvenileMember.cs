using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;

namespace NW_Central_Library.Models.LibraryModels
{
    public partial class JuvenileMember
    {
        public JuvenileMember()
        {
            MemberEmail = new HashSet<MemberEmail>();
            MemberPhone = new HashSet<MemberPhone>();
        }

        public int Id { get; set; }

        [Display(Name = "Adult Id")]
        public int AdultId { get; set; }

        [Display(Name = "First Name")]
        public string FirstName { get; set; }

        [Display(Name = "Last Name")]
        public string LastName { get; set; }

        [Display(Name = "Middle Initial")]
        public string MidInit { get; set; }

        public string Suffix { get; set; }

        [Display(Name = "Birth Date")]
        public DateTime Birthdate { get; set; }

        [Display(Name = "Inactive")]
        public bool? InActive { get; set; }

        [Display(Name = "Inactive Date")]
        public DateTime? InActiveDate { get; set; }

        public AdultMember Adult { get; set; }
        public ICollection<MemberEmail> MemberEmail { get; set; }
        public ICollection<MemberPhone> MemberPhone { get; set; }
    }
}
