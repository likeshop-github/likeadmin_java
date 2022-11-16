package com.mdd.admin.validate.system;

import com.mdd.common.validator.annotation.IDMust;
import org.hibernate.validator.constraints.Length;
import lombok.Data;

import javax.validation.constraints.NotEmpty;
import java.io.Serializable;

/**
 * 系统管理员自更新参数
 */
@Data
public class SystemAdminUpInfoValidate implements Serializable {

    private static final long serialVersionUID = 1L;

    @NotEmpty(message = "昵称不能为空")
    @Length(min = 2, max = 30, message = "昵称必须在2~30个字符内")
    private String nickname;

    @Length(min = 6, max = 32, message = "密码必须在6~32个字符内")
    private String password;

    @Length(min = 6, max = 32, message = "当前密码错误")
    private String currPassword;

    @Length(min = 6, max = 32, message = "旧密码错误")
    private String oldPassword;

    @Length(max = 200, message = "头像不能超出200个字符")
    private String avatar = "";

}
