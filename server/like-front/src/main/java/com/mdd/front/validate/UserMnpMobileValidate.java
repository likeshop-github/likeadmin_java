package com.mdd.front.validate;

import lombok.Data;

import javax.validation.constraints.NotNull;
import java.io.Serializable;

/**
 * 获取微信手机号参数
 */
@Data
public class UserMnpMobileValidate implements Serializable {

    private static final long serialVersionUID = 1L;

    @NotNull(message = "code参数缺失")
    private String code;

}
