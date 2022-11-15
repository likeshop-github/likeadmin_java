package com.mdd.admin.validate.system;

import com.mdd.common.validator.annotation.IDMust;
import com.mdd.common.validator.annotation.IntegerContains;
import lombok.Data;
import org.hibernate.validator.constraints.Length;

import javax.validation.constraints.DecimalMin;
import javax.validation.constraints.NotNull;
import java.io.Serializable;

/**
 * 系统岗位更新参数
 */
@Data
public class SystemPostUpdateValidate implements Serializable {

    private static final long serialVersionUID = 1L;

    @IDMust(message = "id参数必传且需大于0")
    private Integer id;

    @NotNull(message = "code参数缺失")
    @Length(min = 1, max = 30, message = "岗位编码必须在1~30个字符内")
    private String code;

    @NotNull(message = "name参数缺失")
    @Length(min = 1, max = 30, message = "岗位名称必须在1~30个字符内")
    private String name;

    @NotNull(message = "请选择状态")
    @IntegerContains(values = {0, 1})
    private Integer isStop = 0;

    @Length( max = 250, message = "岗位备注不能大于250个字符内")
    private String remarks = "";

    @NotNull(message = "排序号不能为空")
    @DecimalMin(value = "0", message = "排序号值不能少于0")
    private Integer sort = 0;

}
